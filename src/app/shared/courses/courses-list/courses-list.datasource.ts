import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import {catchError, finalize, map} from 'rxjs/operators';
import {Observable, BehaviorSubject, of} from 'rxjs';
import { ICourse } from '../course.model';
import { CoursesService } from '../courses.service';

export class CourseListDataSource extends DataSource<ICourse> {

  private courseSubject = new BehaviorSubject<ICourse[] | any>([]);
  public courseCountSubject=new BehaviorSubject<number| any>(0);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private courseService: CoursesService) {
    super();
  }
  
  loadCourses(query = '',  pageIndex = 1, pageSize = 10,sortField='label') {
    this.courseSubject.next(true);
    this.courseService.findCourses(
      query,
      pageIndex,
      pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(course =>{
        this.courseCountSubject.next(course.count)
        this.courseSubject.next(course.rows)
      });
  }

  connect(collectionViewer: CollectionViewer): Observable<ICourse[]> {
    return this.courseSubject.asObservable();
  }


  disconnect(collectionViewer: CollectionViewer): void {
    this.courseCountSubject.complete()
    this.courseSubject.complete();
    this.loadingSubject.complete();
  }
}
