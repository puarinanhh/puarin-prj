import { createAction, props } from '@ngrx/store';

// Example action
export const exampleAction = createAction(
  '[App] Example Action',
  props<{ payload: any }>()
);
