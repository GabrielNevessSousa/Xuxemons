import { Injectable } from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { User } from '../Models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) {
  }


  registerUser(user: User): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    return this.http.post<User>('http://127.0.0.1:8000/registre', user, { headers: httpHeaders }).pipe(
      map((res: any) => {
        console.log(res);
        return res;
      })
    );
  }

loginUser(credentials: { email: string, password: string }): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

    return this.http.post<User>('http://127.0.0.1:8000/api/login', credentials, { headers: httpHeaders })
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        }),
        catchError((error: any) => {
          console.error('Error en la solicitud:', error);
          return throwError(error);
        })
      );
  }
}
