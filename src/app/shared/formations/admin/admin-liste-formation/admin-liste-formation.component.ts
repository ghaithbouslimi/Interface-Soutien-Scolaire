import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, merge, tap, fromEvent } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { IFormation } from '../../formation.model';
import { FormationService } from '../../formation.service';
import { FormationListDataSource } from '../../list-formation-datasource';

@Component({
  selector: 'app-admin-liste-formation',
  templateUrl: './admin-liste-formation.component.html',
  styleUrls: ['./admin-liste-formation.component.scss']
})
export class AdminListeFormationComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IFormation>;
  @ViewChild('queryField') queryField: ElementRef;

  dataSource: FormationListDataSource;
  datasourceLength:number=1;
  displayedColumns = ['titre','theme','duree','coach','courses','actions'];

  constructor(
    private formationService:FormationService, 
    private route:Router,
    private snackBar:MatSnackBar,
    public dialog: MatDialog) {
    this.dataSource = new FormationListDataSource(this.formationService);
    
  }

  ngOnInit(): void {
    this.dataSource.loadFormation('',1, 10);
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=1);
    // @ts-ignore
    fromEvent(this.queryField.nativeElement,'keyup')
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadFormationPage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadFormationPage())
      )
      .subscribe();
  }

  loadFormationPage() {
    this.dataSource.loadFormation(
      this.queryField.nativeElement.value,
      this.paginator.pageIndex+1,
      this.paginator.pageSize);
  }

  removeFormation(id:string){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: "Are you sure to delete this Training? "
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.formationService.removeFormation(id).subscribe({
          next:(data)=>{
                this.snackBar.open('Training deleted successfully ','X');
                this.dataSource.loadFormation('',1, 10);
          },
          error:(error)=>{
            this.snackBar.open(`Error ${JSON.stringify(error)}`);
          },
          complete:()=>{}
        })
      }
    });
  }

  updateFormation(id:string){
   this.route.navigate(['/admin/training/update',id])
  }

  gotoAddFormationForm(){
    this.route.navigate(['/admin/training/add'])
  }

  getCoursesTitles(courses){
    return courses.map(c=>c.title).join(';')

  }
 


}
