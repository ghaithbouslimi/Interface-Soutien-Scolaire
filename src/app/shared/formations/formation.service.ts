import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFormation } from './formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  constructor(private http:HttpClient) {}

  addFormation(formation: IFormation):Observable<any>{
    return this.http.post(`${environment.API_URL}/formations`,formation) as Observable<any>
  }

  findFormation(filter = '',pageNumber=1,pageSize=10,sortField='titre' ):Observable<any>{
    return this.http.get(`${environment.API_URL}/formations`,
      {
        params:new HttpParams()
          .set('q', filter)
          .set('page', pageNumber.toString())
          .set('limit', pageSize.toString())
          .set('sort', sortField) 
        
      }
    ) as Observable<any>
  }
  
getAllFormations():Observable<any>{
    return this.http.get(`${environment.API_URL}/formations`) as Observable<any>
  }

  removeFormation(id:string):Observable<any>{
    return this.http.delete(`${environment.API_URL}/formations/${id}`) as Observable<any>
  }

  getFormationById(id:string):Observable<any>{
          return this.http.get(`${environment.API_URL}/formations/${id}`) as Observable<any>
  }

  updateFormation(id:string, formation:IFormation):Observable<any>{
    return this.http.put(`${environment.API_URL}/formations/${id}`,formation ) as Observable<any>
  }
}