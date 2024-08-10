import { Component, OnInit } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { UsersService } from '../../core/services/users-service.service';
import { CommonModule } from '@angular/common';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { Store } from '@ngrx/store';
import { actionTypes } from '../../core/store/users.actions';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from '../../core/store/users.effects';
import { UserModel } from '../../core/models/user.interface';
import { Observable, Subscription, take } from 'rxjs';
import { usersInfo } from '../../core/store/users.reducer';
@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent,CommonModule,PaginatorModule,],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
// usersObs = this.usersService.users$;
usersInfoSubscription!:Subscription;
usersInfo$: Observable<usersInfo> = this.store.select(state => state.usersInfo);



 constructor(private usersService:UsersService,
  private store: Store<{  usersInfo:usersInfo}>){}

  ngOnInit(): void {
    // this.usersService.getUsersList(1);
   this.usersInfoSubscription =  this.usersInfo$.pipe(take(1)).subscribe((info:usersInfo)=> {
      this.store.dispatch({ type: actionTypes.LOAD_USERS,payload: {page:info.pageNumber}});
       
    });
   
   
    
    
  }

  paginate(event:PaginatorState){
    let page = event.page?event.page+1 :1;
    this.store.dispatch({ type: actionTypes.LOAD_USERS,payload: {page}});
   // this.usersService.getUsersList(page);
  }
  onDestroy() {
    this.usersInfoSubscription?.unsubscribe()
  }
}
