import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CoachService } from './coach.service';
import { ICoach } from './coach.model';


@Injectable({
  providedIn: 'root'
})
export class CoachResolver implements Resolve<any> {
  
  constructor(private coachService:CoachService){

  }

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<ICoach>|ICoach {
    return this.coachService.getCoachById(route.paramMap.get('id') as string)
  }
}
