import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
    {path: 'users', component: UsersListComponent},
    {path: '',pathMatch:"full", redirectTo: 'users'},
    {path: 'user/:id', component: UserDetailsComponent},
  ];