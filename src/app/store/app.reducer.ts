import { createReducer, on } from '@ngrx/store';
import { AppState } from './app.state';
import * as AppActions from './app.actions';

export const initialState: AppState = {
  // Initialize your state here
};

export const appReducer = createReducer(
  initialState,
  // Add your reducers here
  // Example:
  // on(AppActions.exampleAction, (state, { payload }) => ({
  //   ...state,
  //   // Update state based on action
  // }))
);
