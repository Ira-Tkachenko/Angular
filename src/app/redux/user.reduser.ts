import { User } from '../services/user';

import {
  CREAT_USER_ERROR, CREATE_USER, CREATING_USER,
  DELETE_USER, DELETE_USER_ERROR, DELETING_USER,
  LOAD_USERS, LOAD_USERS_ERROR, LOADING_USERS,
  UPDATE_USER, UPDATE_USER_ERROR, UPDATING_USER,
  UsersActions
} from './user.action';
import { Map } from 'immutable';

export interface UserState {
  data: User;
  loaded: boolean;
  loading: boolean;
}

export const initialState: UserState = {
  data: {},
  loaded: false,
  loading: false,
};

export function userReducer(state: any, action: UsersActions): any {

  switch (action.type) {

    case LOAD_USERS: {
      return Map(state).set('data', action.payload).set('loading', false).set('loaded', true).toJS();
    }

    case LOADING_USERS: {
      return Map(state).set('loading', true).set('loaded', false).toJS();
    }

    case LOAD_USERS_ERROR: {
      return Map(state).set('data', action.payload).set('loading', false).set('loaded', false).toJS();
    }

    case CREATE_USER: {
      return Map(state).set('data', action.payload).set('loading', false).set('loaded', true).toJS();
    }

    case CREAT_USER_ERROR: {
      return Map(state).set('data', action.payload).set('loading', false).set('loaded', false).toJS();
    }

    case CREATING_USER: {
      return Map(state).set('data', action.payload).set('loading', true).set('loaded', false).toJS();
    }

    case UPDATE_USER: {
      return Map(state).set('data', action.payload).set('loading', false).set('loaded', true).toJS();
    }

    case UPDATE_USER_ERROR: {
      return Map(state).set('data', action.payload).set('loading', false).set('loaded', false).toJS();
    }

    case UPDATING_USER: {
      return Map(state).set('data', action.payload).set('loading', true).set('loaded', false).toJS();
    }

    case DELETE_USER: {
      return Map(state).set('data', action.payload).set('loading', true).set('loaded', false).toJS();
    }

    case DELETE_USER_ERROR: {
      return Map(state).set('data', action.payload).set('loading', false).set('loaded', false).toJS();
    }

    case DELETING_USER: {
      return Map(state).set('data', action.payload).set('loading', true).set('loaded', false).toJS();
    }

    default: {
      return state;
    }
  }
}