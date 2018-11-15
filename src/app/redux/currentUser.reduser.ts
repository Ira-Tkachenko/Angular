import { User } from '../services/user';
import {
  LOGIN_USER_SUCCESS, LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGIN_USER_ERROR,
  LOAD_CURRENT_USER, LOADING_CURRENT_USER, UPDATE_CURRENT_USER, UPDATING_CURRENT_USER,
  LOGOUT_USER_ERROR, LOAD_CURRENT_USER_ERROR, UPDATE_CURRENT_USER_ERROR, UsersActions, LOGIN_USER
} from './user.action';
import { Map } from 'immutable';

export interface CurrentUserState {
  data: User;
  loaded: boolean;
  loading: boolean;
}

export const initialState: CurrentUserState = {
  data: {},
  loaded: false,
  loading: false,
};

export function currentUserReducer(state: any, action: UsersActions): any {

  switch (action.type) {

    case LOGIN_USER: {
      return Map(state).set('data', action.payload).set('loading', false).set('loaded', true).toJS();
    }

    case LOGIN_USER_SUCCESS: {
      return Map(state).set('data', action.payload).set('loading', true).set('loaded', false).toJS();
    }

    case LOGIN_USER_ERROR: {
      return Map(state).set('data', action.payload).set('loading', false).set('loaded', false).toJS();
    }

    case LOGOUT_USER: {
      return Map(state).set('loading', false).set('loaded', true).toJS();
    }

    case LOGOUT_USER_SUCCESS: {
      return Map(state).set('loading', true).set('loaded', false).toJS();
    }

    case LOGOUT_USER_ERROR: {
      return Map(state).set('data', action.payload).set('loading', false).set('loaded', false).toJS();
    }

    case LOAD_CURRENT_USER: {
      return Map(state).set('data', action.payload).set('loading', true).set('loaded', false).toJS();
    }

    case LOAD_CURRENT_USER_ERROR: {
      return Map(state).set('data', action.payload).set('loading', false).set('loaded', false).toJS();
    }

    case LOADING_CURRENT_USER: {
      return Map(state).set('loading', false).set('loaded', true).toJS();
    }

    case UPDATE_CURRENT_USER: {
      return Map(state).set('data', action.payload).set('loading', false).set('loaded', true).toJS();
    }

    case UPDATE_CURRENT_USER_ERROR: {
      return Map(state).set('data', action.payload).set('loading', false).set('loaded', false).toJS();
    }

    case UPDATING_CURRENT_USER: {
      return Map(state).set('data', action.payload).set('loading', true).set('loaded', false).toJS();
    }

    default: {
      return state;
    }
  }
}