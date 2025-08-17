import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectAddUserSuccess = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

export const selectAddUserFail = createSelector(
  selectUserState,
  (state: UserState) => state.error
);

export const selectSelectedUser = createSelector(
  selectUserState,
  (state: UserState) => state.selectedUser
);

export const selectUserLoading = createSelector(
  selectUserState,
  (state: UserState) => state.loading
);
