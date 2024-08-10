import { createAction } from '@ngrx/store';

export const actionTypes = { USERS_LOADED_SUSCCESS:"USERS_LOADED_SUSCCESS", LOAD_USERS:  'Load_USERS' ,USERS_LOADED_ERROR: 'Users Loaded Error'}
export const loadUsers = createAction(actionTypes.LOAD_USERS);
export const usersLoadedError = createAction(actionTypes.USERS_LOADED_ERROR);
export const usersLoadedSuccess = createAction(actionTypes.USERS_LOADED_SUSCCESS);