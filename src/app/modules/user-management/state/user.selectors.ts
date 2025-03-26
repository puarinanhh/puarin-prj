import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const selectUserState = createFeatureSelector<UserState>('Users');

export const selectUsersSuccess = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

export const selectUsersFail = createSelector(
  selectUserState,
  (state: UserState) => state.error
)
