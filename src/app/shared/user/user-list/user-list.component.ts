import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { fromEvent, merge,debounceTime,distinctUntilChanged,tap } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { UserService } from '../user.service';
import { UserListDataSource } from './userListdatasource';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatTable) table!: MatTable<IUser>;
  @ViewChild('queryField') queryField: ElementRef;

  dataSource: UserListDataSource;
  datasourceLength:number=1;
  displayedColumns = ['name','email','role','avatar'];

  constructor(
    private userService:UserService, 
    private route:Router,
    private snackBar:MatSnackBar,
    public dialog: MatDialog) {
    this.dataSource = new UserListDataSource(this.userService);
    
  }

  ngOnInit(): void {
    this.dataSource.loadUsers('',1, 10);
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=1);

    fromEvent(this.queryField.nativeElement,'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadUserPage()
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadUserPage())
      )
      .subscribe();
  }

  loadUserPage() {
    this.dataSource.loadUsers(
      this.queryField.nativeElement.value,
      this.paginator.pageIndex+1,
      this.paginator.pageSize);
  }

  updateUserRole(id:string){
   this.route.navigate(['/admin/user/updaterole',id])
  }

}

