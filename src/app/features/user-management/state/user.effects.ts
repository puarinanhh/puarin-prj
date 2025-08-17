import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {addUser, addUserFailure, addUserSuccess, getUserById, getUserByIdSuccess, getUserByIdFailure} from './user.actions';
import {catchError, map, mergeMap, of} from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);

  addUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addUser),
      mergeMap((action) => this.userService.create(action.payload).pipe(
          map((response) => addUserSuccess({ payload: response })),
          catchError((error) => of(addUserFailure({ error })))
        )
      )
    );
  });

  getUserById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUserById),
      mergeMap((action) => this.userService.getById(action.id).pipe(
          map((user) => getUserByIdSuccess({ user })),
          catchError((error) => of(getUserByIdFailure({ error })))
        )
      )
    );
  });
}
