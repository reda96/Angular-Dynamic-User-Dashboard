import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { UsersService } from '../services/users-service.service';
import { actionTypes } from './users.actions';


@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionTypes.LOAD_USERS),
      exhaustMap((action:any) => this.usersService.getUsersList(action.payload.page)
        .pipe(
          map(usersInfo => {  return ({ type: actionTypes.USERS_LOADED_SUSCCESS, payload: usersInfo })}),
          catchError(() => of({ type: actionTypes.USERS_LOADED_ERROR }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}
}