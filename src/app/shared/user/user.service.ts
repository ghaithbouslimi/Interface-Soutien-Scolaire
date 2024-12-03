import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user.model';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient:HttpClient) { }

  //TODO: to refactor add HEADER of master key in an http interceptor
  addNewUser(user:IUser):Observable<any>{
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer masterKey');
      return this.httpClient.post(`${environment.API_URL}/users`,user,{ 'headers': headers }) as Observable<any>;
  }

  deleteUser(id:string):Observable<any>{
    return this.httpClient.delete(`${environment.API_URL}/users/delete/${id}`) as Observable<any>;
  }

  updateUserRole(id:string,role:string):Observable<any>{
   return this.httpClient.put(`${environment.API_URL}/users/update/role/${id}`,{"new_role":role}) as Observable<any>;
  }

  updateUser(id:string,user:IUser):Observable<any>{
     let _user={...user};
    return this.httpClient.put(`${environment.API_URL}/users/update/${id}`,_user) as Observable<any>;
  }

  getAllUsers():Observable<any>{
    return this.httpClient.get(`${environment.API_URL}/users`) as Observable<any>;
  }

  getUserById(id:string):Observable<any>{
    return this.httpClient.get(`${environment.API_URL}/users/user/${id}`) as Observable<any>;
  }

  
  findUser(filter = '',pageNumber=1,pageSize=10,sortField='email' ):Observable<any>{
    return this.httpClient.get(`${environment.API_URL}/users`,
      {
        params:new HttpParams()
          .set('q', filter)
          .set('page', pageNumber.toString())
          .set('limit', pageSize.toString())
          .set('sort', sortField),
      }
    ) as Observable<any>
  }
}
