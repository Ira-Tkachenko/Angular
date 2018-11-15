import { userReducer, UserState } from './user.reduser';
import { currentUserReducer, CurrentUserState } from './currentUser.reduser';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersActions } from './user.action';


export interface UserInfoState {
  users: UserState;
}

export interface UserLoginState {
  currentUser: CurrentUserState;
}

export const userInfoReducers: ActionReducerMap<UserInfoState, UsersActions> = {
  users: userReducer
};

export const userLoginReducers: ActionReducerMap<UserLoginState, UsersActions> = {
  currentUser: currentUserReducer
};


export const selectCurrentUser = (state: UserLoginState) => state.currentUser.data;