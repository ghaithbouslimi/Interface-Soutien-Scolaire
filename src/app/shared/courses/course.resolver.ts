import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ICourse } from './course.model';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<any> {
  
  constructor(private courseService:CoursesService){

  }

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<ICourse>|ICourse {
    return this.courseService.getCourseById(route.paramMap.get('id') as string)
  }
}
