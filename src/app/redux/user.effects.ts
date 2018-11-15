import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { catchError, map, mapTo, mergeMap, switchMap, tap } from 'rxjs/operators';

import {
  LoginUser,
  LoginUserError,
  UsersActions,
  LoginUserSuccess, LOGIN_USER, UPDATE_CURRENT_USER, UpdateCurrentUser, UpdatingCurrentUser, LOADING_CURRENT_USER, LoadingCurrentUser
} from './user.action';
import { User } from '../services/user';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class UserEffects {
  isLoading: boolean;
  constructor(
    private actions$: Actions,
    private usersService: UsersService,
    private router: Router
  ) {
  }


  @Effect()
  updateCurrentUser$: Observable<UsersActions> = this.actions$.pipe(
    ofType(UPDATE_CURRENT_USER),
    mergeMap((action: UpdatingCurrentUser) => this.usersService.addUser(action.payload as User).pipe(
      map((user: User) => new UpdateCurrentUser(user))
    ))
  );

  @Effect()
  loginUser$: Observable<UsersActions> = this.actions$.pipe( ofType(LOGIN_USER),
    mergeMap((action: LoginUser) => this.usersService.login(action.payload as User).pipe(
      map((user: User) => new LoginUserSuccess(user))
    ))
  )
}