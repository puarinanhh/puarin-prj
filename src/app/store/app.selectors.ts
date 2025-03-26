import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

// Example selector
export const selectExample = (state: AppState) => state;

// Example memoized selector
export const selectExampleMemoized = createSelector(
  selectExample,
  (state) => state
);
