import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../../core/services/users-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  userDetailsObs = this.usersService.userDetails$;
  constructor(private activatedRoute:ActivatedRoute, 
        private usersService:UsersService
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const userId = params['id'];
      this.usersService.getUserDetail(userId);
    })
  }
}
