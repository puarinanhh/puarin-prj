import { createReducer, on } from '@ngrx/store';
import { addUser, addUserFailure, addUserSuccess, loading } from './user.actions';
import {User} from './user.model';


export interface ResponseModal {
  data: any[];
  status: string;
  message: string;
}
export interface UserState {
      users: any[];
      success: string;
      error: string;
      loading: boolean;
}
export const InitialState: UserState = {
      users: [],
      success: '',
      error: '',
      loading: false
};

export const userReducer = createReducer(InitialState,
      on(loading, (state) => ({ ...state, loading: true })),
      on(addUser, (state) => state),
      on(addUserSuccess, (state, { payload }) => ({ ...state, loading: false, success: 'User added successfully', users: payload })),
      on(addUserFailure, (state) => ({ ...state, loading: false, error: 'User added fail' }))
);
