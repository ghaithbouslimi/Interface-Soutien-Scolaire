import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICoach } from './coach.model';



const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer masterKey');

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  constructor(private http:HttpClient) {}

  addCoach(coach: ICoach):Observable<any>{
    return this.http.post(`${environment.API_URL}/coaches`,coach) as Observable<any>
  }

  findCoach(filter = '',pageNumber=1,pageSize=10,sortField='fullName' ):Observable<any>{
    return this.http.get(`${environment.API_URL}/coaches`,
      {
        params:new HttpParams()
          .set('master_key', 'masterKey')
          .set('q', filter)
          .set('page', pageNumber.toString())
          .set('limit', pageSize.toString())
          .set('sort', sortField),
        'headers': headers
      }
    ) as Observable<any>
  }

  getAllCoaches():Observable<any>{
    return this.http.get(`${environment.API_URL}/coaches`,
      { 'headers': headers }
    ) as Observable<any>
  }

  removeCoach(id:string):Observable<any>{
    return this.http.delete(`${environment.API_URL}/coaches/${id}`,{ 'headers': headers }) as Observable<any>
  }

  getCoachById(id:string):Observable<any>{
          return this.http.get(`${environment.API_URL}/coaches/${id}`,{ 'headers': headers }) as Observable<any>
  }

  updateCoach(id:string, coach:ICoach):Observable<any>{
    return this.http.put(`${environment.API_URL}/coaches/${id}`,coach,{ 'headers': headers }) as Observable<any>
  }
}

