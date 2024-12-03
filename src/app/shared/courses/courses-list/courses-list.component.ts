import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ICourse } from '../course.model';
import { CourseListDataSource } from './courses-list.datasource';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { debounceTime, distinctUntilChanged, merge, tap,fromEvent } from 'rxjs';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ICourse>;
  @ViewChild('queryField') queryField: ElementRef;

  dataSource: CourseListDataSource;
  datasourceLength:number=1;
  displayedColumns = ['title','description','author','cover','category','actions'];

  constructor(
    private coursesService:CoursesService, 
    private route:Router,
    private snackBar:MatSnackBar,
    public dialog: MatDialog) {
    this.dataSource = new CourseListDataSource(this.coursesService);
    
  }

  ngOnInit(): void {
    this.dataSource.loadCourses('',1, 10);
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
          this.loadCoursePage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadCoursePage())
      )
      .subscribe();
  }

  loadCoursePage() {
    this.dataSource.loadCourses(
      this.queryField.nativeElement.value,
      this.paginator.pageIndex+1,
      this.paginator.pageSize);
  }

  removeCourse(id:string){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: "Are you sure to delete this course? "
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.coursesService.removeCourse(id).subscribe({
          next:(data)=>{
                this.snackBar.open('Courses deleted successfully ','X');
                this.dataSource.loadCourses('',1, 10);
          },
          error:(error)=>{
            this.snackBar.open(`Error ${JSON.stringify(error)}`);
          },
          complete:()=>{}
        })
      }
    });
  }

  updateCourse(id:string){
   this.route.navigate(['/admin/courses/update',id])
  }

  gotoAddCourseForm(){
    this.route.navigate(['/admin/courses/add'])
  }

  getFullUrlPhoto(photoHrl:string):string{
    return photoHrl ?
    `${environment.API_URL}/${photoHrl}`:
    'assets/defaultCourse.png';
  }

}
