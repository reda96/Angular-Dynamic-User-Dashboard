import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError,  tap } from 'rxjs';
import { UserModel } from '../models/user.interface';
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  private usersSubject = new BehaviorSubject<UserModel[]>([]);
  private userDetailsSubject = new BehaviorSubject<UserModel |undefined>(undefined);
  private searchResultSubject = new BehaviorSubject<UserModel |undefined>(undefined);

  get users$ (){
    return this.usersSubject.asObservable();
  }
  get userDetails$ (){
    return this.userDetailsSubject.asObservable();
  }
  get searchResult$ (){
    return this.searchResultSubject.asObservable();
  }
  getUsersList(page:number) {
   return this.http.get(`https://reqres.in/api/users?page=${page}`)
    .pipe(tap((response:any)=> {
      this.usersSubject.next(response);
      
    }))
    
  }
  getUserDetail(userId:number) {
    this.http.get(`https://reqres.in/api/users/${userId}`)
    .pipe(
      catchError(()=> {this.searchResultSubject.next(undefined);  throw new Error("No User Found")}),
      tap((response:any)=> {
      this.userDetailsSubject.next(response.data);
      
    }))
    .subscribe();
  }
  searchWtiUserId(userId:number) {
    let params = new HttpParams().set('isSearchReq', true);
    this.http.get(`https://reqres.in/api/users/${userId}`,{ params })
    .pipe(
      catchError(()=> {this.searchResultSubject.next(undefined); return []}),
      tap((response:any)=> {
      this.searchResultSubject.next(response.data);
      
    }))
    .subscribe();
  }
}
