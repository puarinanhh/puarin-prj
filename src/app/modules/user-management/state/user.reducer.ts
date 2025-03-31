import { createReducer, on } from '@ngrx/store';
import { addUser, addUserFailure, addUserSuccess, loading, getUserById, getUserByIdSuccess, getUserByIdFailure } from './user.actions';
import {User} from './user.model';


export interface ResponseModal {
  data: any[];
  status: string;
  message: string;
}
export interface UserState {
      users: any[];
      selectedUser: User | null;
      success: string;
      error: string;
      loading: boolean;
}
export const InitialState: UserState = {
      users: [],
      selectedUser: null,
      success: '',
      error: '',
      loading: false
};

export const userReducer = createReducer(InitialState,
      on(loading, (state) => ({ ...state, loading: true })),
      on(addUser, (state) => state),
      on(addUserSuccess, (state, { payload }) => ({ ...state, loading: false, success: 'User added successfully', users: payload })),
      on(addUserFailure, (state) => ({ ...state, loading: false, error: 'User added fail' })),
      on(getUserById, (state) => ({ ...state, loading: true, error: '' })),
      on(getUserByIdSuccess, (state, { user }) => ({ ...state, loading: false, selectedUser: user, success: 'User retrieved successfully' })),
      on(getUserByIdFailure, (state, { error }) => ({ ...state, loading: false, error: 'Failed to retrieve user' }))
);
