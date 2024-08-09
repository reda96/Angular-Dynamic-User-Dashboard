import { Component, OnInit } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { UsersService } from '../../core/services/users-service.service';
import { CommonModule } from '@angular/common';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent,CommonModule,PaginatorModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
usersObs = this.usersService.users$;
pages = 3;
 constructor(private usersService:UsersService){}

  ngOnInit(): void {
     this.usersService.getUsersList(1);
  }

  paginate(event:PaginatorState){
    let page = event.page?event.page+1 :1;
    this.usersService.getUsersList(page);
  }
}
