import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './user';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[];
  usersUrl = 'http://localhost:3030/users';
  loginUrl = 'http://localhost:3030/login';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  loginUser(userName: string, userPassword: string): Observable<User> {
    userName = userName.trim();
  	const params = {name: userName, password: userPassword};
    return this.http.post<User>(this.loginUrl, params);
  }

  restoreUser(userName: string, user: User): Observable<User> {
  	userName = userName.trim();
    return this.http.put<User>('http://localhost:3030/restore/' + userName, user);
  } 

  putUser(id: number, user: User): Observable<User> {
    return this.http.put<User>('http://localhost:3030/users/' + id, user);
  } 

  /*searchUsers(term: string): Observable<User[]> {
    term = term.trim();
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<User[]>(this.usersUrl, options)
      .pipe(
        catchError(this.handleError<User[]>('searchHeroes', []))
      );
  }*/      
}
