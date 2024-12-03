import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICourse } from './course.model';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer masterKey');

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http:HttpClient) {}

  addCourse(cource: ICourse):Observable<any>{
    return this.http.post(`${environment.API_URL}/courses`,cource,{ 'headers': headers }) as Observable<any>
  }

  findCourses(filter = '',pageNumber=1,pageSize=10,sortField='title' ):Observable<any>{
    return this.http.get(`${environment.API_URL}/courses`,
      {
        params:new HttpParams()
          .set('q', filter)
          .set('page', pageNumber.toString())
          .set('limit', pageSize.toString())
          .set('sort', sortField) ,
        'headers': headers
      }
    ) as Observable<any>
  }

  getAllCourses():Observable<any>{
    return this.http.get(`${environment.API_URL}/courses`,
      {'headers': headers}
    ) as Observable<any>
  }

  removeCourse(id:string):Observable<any>{
    return this.http.delete(`${environment.API_URL}/courses/${id}`,{ 'headers': headers }) as Observable<any>
  }

  getCourseById(id:string):Observable<any>{
          return this.http.get(`${environment.API_URL}/courses/${id}`,{ 'headers': headers }) as Observable<any>
  }

  updateCourse(id:string, course:ICourse):Observable<any>{
    return this.http.put(`${environment.API_URL}/courses/${id}`,course,{ 'headers': headers }) as Observable<any>
  }
}
