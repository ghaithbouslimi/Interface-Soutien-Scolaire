import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import {catchError, finalize, map} from 'rxjs/operators';
import {Observable, BehaviorSubject, of} from 'rxjs';
import { IFormation } from './formation.model';
import { FormationService } from './formation.service';


export class FormationListDataSource extends DataSource<IFormation> {

  private formationSubject = new BehaviorSubject<IFormation[] | any>([]);
  public formationCountSubject=new BehaviorSubject<number| any>(0);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  constructor(private formationService: FormationService) {
    super();
  }
  
  loadFormation(query = '',  pageIndex = 1, pageSize = 10,sortField='label') {
    this.formationSubject.next(true);
    this.formationService.findFormation(
      query,
      pageIndex,
      pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    )
      .subscribe(formation =>{
        this.formationCountSubject.next(formation.count)
        this.formationSubject.next(formation.rows)
      });
  }

  connect(collectionViewer: CollectionViewer): Observable<IFormation[]> {
    return this.formationSubject.asObservable();
  }


  disconnect(collectionViewer: CollectionViewer): void {
    this.formationCountSubject.complete()
    this.formationSubject.complete();
    this.loadingSubject.complete();
  }
}
