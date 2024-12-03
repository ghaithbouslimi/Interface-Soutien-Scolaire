import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IFormation } from './formation.model';
import { FormationService } from './formation.service';




@Injectable({
  providedIn: 'root'
})
export class FormationResolver implements Resolve<any> {
  
  constructor(private formationService:FormationService){

  }

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<IFormation>|IFormation {
    return this.formationService.getFormationById(route.paramMap.get('id') as string)
  }
}
