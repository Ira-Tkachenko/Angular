import { Action } from '@ngrx/store';
import { User } from '../services/user';

export const LOGIN_USER_SUCCESS = '[User] Login User';
export const LOGIN_USER = '[User] Loging User ';
export const LOGIN_USER_ERROR = '[User] Login User Error';
export const LOGOUT_USER = '[User] Logout User';
export const LOGOUT_USER_SUCCESS = '[User] Loggingout User';
export const LOGOUT_USER_ERROR = '[User] Logout User Error';
export const LOAD_USERS = '[User] Load Users';
export const LOADING_USERS = '[User] Loading Users';
export const LOAD_USERS_ERROR = '[User] Loading UsersError';
export const CREATE_USER = '[User] Create User';
export const CREATING_USER = '[User] Creating User';
export const CREAT_USER_ERROR = '[User] Create User Error';
export const UPDATE_USER = '[User] Update User';
export const UPDATING_USER = '[User] Updating User';
export const UPDATE_USER_ERROR = '[User] Update User Error';
export const DELETE_USER = '[User] Delete User';
export const DELETING_USER = '[User] Deleting User';
export const DELETE_USER_ERROR = '[User] Delete User Error';
export const LOAD_CURRENT_USER = '[User] Load Current User';
export const LOADING_CURRENT_USER = '[User] Loaded Current User';
export const LOAD_CURRENT_USER_ERROR = '[User]  Load Current User Error';
export const UPDATE_CURRENT_USER = '[User] Update Current User';
export const UPDATING_CURRENT_USER = '[User] Updated Current User';
export const UPDATE_CURRENT_USER_ERROR = '[User] Update Current Error';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;

  constructor(public payload: User[]) {
  }
}

export class LoadUsersError implements Action {
  readonly type = LOAD_USERS_ERROR;

  constructor(public payload: string | number) {
  }
}

export class LoadingUsers implements Action {
  readonly type = LOADING_USERS;
}

export class CreateUser implements Action {
  readonly type = CREATE_USER;

  constructor(public payload: User) {
  }
}

export class CreateUserError implements Action {
  readonly type = CREAT_USER_ERROR;

  constructor(public payload: string | number) {
  }
}

export class CreatingUser implements Action {
  readonly type = CREATING_USER;

  constructor(public payload: User) {
  }
}

export class UpdateUser implements Action {
  readonly type = UPDATE_USER;

  constructor(public payload: User) {
  }
}

export class UpdateUsersError implements Action {
  readonly type = UPDATE_USER_ERROR;

  constructor(public payload: string | number) {
  }
}

export class UpdatingUser implements Action {
  readonly type = UPDATING_USER;

  constructor(public payload: User) {
  }
}

export class DeleteUser implements Action {
  readonly type = DELETE_USER;

  constructor(public payload: number | undefined) {
  }
}

export class DeleteUserError implements Action {
  readonly type = DELETE_USER_ERROR;

  constructor(public payload: string | number) {
  }
}

export class DeletingUser implements Action {
  readonly type = DELETING_USER;

  constructor(public payload: User) {
  }
}

export class LoadCurrentUser implements Action {
  readonly type = LOAD_CURRENT_USER;

  constructor(public payload: User) {
  }
}

export class LoadCurrentUserError implements Action {
  readonly type = LOAD_CURRENT_USER_ERROR;

  constructor(public payload: string | number) {
  }
}

export class LoadingCurrentUser implements Action {
  readonly type = LOADING_CURRENT_USER;

}

export class UpdateCurrentUser implements Action {
  readonly type = UPDATE_CURRENT_USER;

  constructor(public payload: User) {
  }
}

export class UpdateCurrentUserError implements Action {
  readonly type = UPDATE_CURRENT_USER_ERROR;

  constructor(public payload: User) {
  }
}

export class UpdatingCurrentUser implements Action {
  readonly type = UPDATING_CURRENT_USER;

  constructor(public payload: User) {
  }
}

export class LoginUserSuccess implements Action {
  readonly type = LOGIN_USER_SUCCESS;

  constructor(public payload: User) {
  }
}

export class LoginUser implements Action {
  readonly type = LOGIN_USER;

  constructor(public payload: User) {
  }
}

export class LoginUserError {
  readonly type = LOGIN_USER_ERROR;

  constructor(public payload: string | number) {
  }
}

export class LogoutUser implements Action {
  readonly type = LOGOUT_USER;
}

export class LogoutUserError {
  readonly type = LOGOUT_USER_ERROR;

  constructor(public payload: string | number) {
  }
}

export class LogoutUserSuccess implements Action {
  readonly type = LOGOUT_USER_SUCCESS;
}

export type UsersActions = LoadUsers | LoadingUsers | LoadUsersError | CreateUser |
  CreatingUser | UpdateUsersError | UpdateUser | UpdatingUser | DeleteUser | DeletingUser |
  LoadCurrentUserError | LogoutUserError | UpdateCurrentUserError| CreateUserError |
  DeleteUserError | LoadCurrentUser | LoadingCurrentUser | UpdateCurrentUser | UpdatingCurrentUser |
  UpdateUsersError | LoginUserSuccess | LoginUser | LogoutUser | LogoutUserSuccess | LoginUserError;