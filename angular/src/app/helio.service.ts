import { Injectable } from '@angular/core';
import { User } from './user';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, Response } from "@angular/http";
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable()
export class HelioService {

  constructor(private http: HttpClient) { 
  }

  getUser(id: number):Observable<User>{
  	var url = `http://localhost:8000/helio/user/${id}/`;
  	return this.http.get<User>(url);
  }
  getUsers():Observable<User[]>{
  	var url = `http://localhost:8000/helio/user/`;
  	return this.http.get<User[]>(url);
  }
  updateUser(user: User):Observable<User>{
  	var id = user.barcode;
  	var url = `http://localhost:8000/helio/user/${id}/`;
  	return this.http.put<User>( url, user);
  }
  // for app
  getUserApp(id: number):Observable<User>{
    var url = `http://localhost:8000/helio/userapp/${id}/`;
    return this.http.get<User>(url);
  }
  getUsersApp():Observable<User[]>{
    var url = `http://localhost:8000/helio/userapp/`;
    return this.http.get<User[]>(url);
  }
  updateUserApp(user: User):Observable<User>{
    var id = user.id;
    var url = `http://localhost:8000/helio/userapp/${id}/`;
    return this.http.put<User>( url, user);
  }

  relateUser(user_id: number, userApp_id: number):Observable<any>{
    const body = {'user_id': user_id, 'userApp_id': userApp_id};
    return this.http.post('http://localhost:8000/helio/relate/', body).map((res: Response) => res.json())
      .catch((err) => {
          console.log('error ',err);
          return Observable.throw(err);
      })
  }

}
