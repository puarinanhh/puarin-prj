import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as AppActions from './app.actions';

@Injectable()
export class AppEffects {
  // Example effect
  // exampleEffect$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(AppActions.exampleAction),
  //     mergeMap(({ payload }) =>
  //       // Handle your async operation here
  //       of(payload).pipe(
  //         map(result => AppActions.exampleAction({ payload: result })),
  //         catchError(error => of(AppActions.exampleAction({ payload: error })))
  //       )
  //     )
  //   );
  // });

  constructor(private actions$: Actions) {}
}
