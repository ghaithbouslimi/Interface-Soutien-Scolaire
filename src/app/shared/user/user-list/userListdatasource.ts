import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import {catchError, finalize, map} from 'rxjs/operators';
import {Observable, BehaviorSubject, of} from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { UserService } from '../user.service';



export class UserListDataSource extends DataSource<IUser> {

  private userSubject = new BehaviorSubject<IUser[] | any>([]);
  public userCountSubject=new BehaviorSubject<number| any>(0);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private userService: UserService) {
    super();
  }
  
  loadUsers(query = '',  pageIndex = 1, pageSize = 10,sortField='email') {
    this.userSubject.next(true);
    this.userService.findUser(
      query,
      pageIndex,
      pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(user =>{
        this.userCountSubject.next(user.count)
        this.userSubject.next(user.rows)
      });
  }

  connect(collectionViewer: CollectionViewer): Observable<IUser[]> {
    return this.userSubject.asObservable();
  }


  disconnect(collectionViewer: CollectionViewer): void {
    this.userCountSubject.complete()
    this.userSubject.complete();
    this.loadingSubject.complete();
  }
}
