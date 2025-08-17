import { User } from "./user.model";
import {createAction, props} from '@ngrx/store';

// add user
// gọi adduser để giao tiếp với effects => call service => giao tiếp với api => api thành công or thất bại sẽ call addusersuccess or adduserfailure
export const addUser = createAction('[User] Add User', props<{payload: any}>());
export const addUserSuccess = createAction('[User] Add User Success', props<{payload: User[]}>());
export const addUserFailure = createAction('[User] Add User Failure', props<{error: any}>());

// get user by id
export const getUserById = createAction('[User] Get User By Id', props<{id: string}>());
export const getUserByIdSuccess = createAction('[User] Get User By Id Success', props<{user: User}>());
export const getUserByIdFailure = createAction('[User] Get User By Id Failure', props<{error: any}>());

// loading
export const loading = createAction('[User] Loading', props<{loading: boolean}>());

// get all users
export const getAllUsers = createAction('[User] Get All Users');
