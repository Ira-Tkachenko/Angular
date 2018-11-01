import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './user';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class UsersService {
	usersUrl = 'http://localhost:3030/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

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