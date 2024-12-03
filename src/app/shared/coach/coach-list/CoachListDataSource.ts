import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import {catchError, finalize, map} from 'rxjs/operators';
import {Observable, BehaviorSubject, of} from 'rxjs';
import { ICoach } from '../coach.model';
import { CoachService } from '../coach.service';


export class CoashListDataSource extends DataSource<ICoach> {

  private coachSubject = new BehaviorSubject<ICoach[] | any>([]);
  public coachCountSubject=new BehaviorSubject<number| any>(0);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private coachService: CoachService) {
    super();
  }
  
  loadCoaches(query = '',  pageIndex = 1, pageSize = 10,sortField='label') {
    this.coachSubject.next(true);
    this.coachService.findCoach(
      query,
      pageIndex,
      pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(coach =>{
        this.coachCountSubject.next(coach.count)
        this.coachSubject.next(coach.rows)
      });
  }

  connect(collectionViewer: CollectionViewer): Observable<ICoach[]> {
    return this.coachSubject.asObservable();
  }


  disconnect(collectionViewer: CollectionViewer): void {
    this.coachCountSubject.complete()
    this.coachSubject.complete();
    this.loadingSubject.complete();
  }
}
