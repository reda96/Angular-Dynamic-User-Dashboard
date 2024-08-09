import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
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
    this.http.get(`https://reqres.in/api/users?page=${page}`)
    .pipe(tap((response:any)=> {
      this.usersSubject.next(response.data);
      
    }))
    .subscribe();
  }
  getUserDetail(userId:number) {
    this.http.get(`https://reqres.in/api/users/${userId}`)
    .pipe(tap((response:any)=> {
      this.userDetailsSubject.next(response.data);
      
    }))
    .subscribe();
  }
  searchWtiUserId(userId:number) {
    this.http.get(`https://reqres.in/api/users/${userId}`)
    .pipe(tap((response:any)=> {
      this.searchResultSubject.next(response.data);
      
    }))
    .subscribe();
  }
}
