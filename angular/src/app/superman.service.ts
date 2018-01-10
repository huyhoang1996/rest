import { Injectable } from '@angular/core';
import { Superman } from './superman';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response } from "@angular/http";
import * as _ from 'lodash';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class SupermanService {

  constructor(private http: HttpClient) { }

    


  getSupermans(): Observable<Superman[]>{
    var supermans = this.http.get<Superman[]>('http://localhost:8000/api/user/');
    return supermans;
  }

  createSuperman(superman: Superman): Observable<Superman>{
    var body = JSON.stringify(superman);
    console.log(body);
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  	var url = `http://localhost:8000/api/user/`;
    var result = this.http.post<Superman>( url, superman, { headers: headers});
  	return result;
  }

  getSuperman(id: number): Observable<Superman>{
    console.log('sevice ', id);
    var url = `http://localhost:8000/api/user/${id}`;
    var superman = this.http.get<Superman>( url);
  	return superman;
  }
}


