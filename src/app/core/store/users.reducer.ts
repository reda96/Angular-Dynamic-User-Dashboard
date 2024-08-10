import { createReducer, on } from "@ngrx/store";
import { actionTypes,loadUsers, usersLoadedSuccess } from './users.actions'
import { UserModel } from "../models/user.interface";
export type usersInfo ={ users:UserModel[], pageNumber:number,total:number, totalPages:number};
export const initialState = { users:[], pageNumber:1,total:0, totalPages:0};

export const usersReducer = createReducer(
  initialState,
  on(loadUsers, (state) => state),
  on(usersLoadedSuccess, (state:any,action:any) => {  
   return {...state, users:action.payload.data,pageNumber:action.payload.page, total:action.payload.total,totalPages:action.payload.total_pages  }}
  ),
 
)