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
  	const params = {name: userName, password: userPassword};
    return this.http.post<User>(this.loginUrl, params);
  }


  /*getUserForLogin(name: string): Observable<User[]> {
  	name = name.trim();
    const res = this.getUsers().subscribe(user => user.name == name);
  }*/

  searchUsers(term: string): Observable<User[]> {
	  term = term.trim();
	  const options = term ?
	   { params: new HttpParams().set('name', term) } : {};

	  return this.http.get<User[]>(this.usersUrl, options)
	    /*.pipe(
	      catchError(this.handleError<User[]>('searchHeroes', []))
	    );*/
  }	    
}
