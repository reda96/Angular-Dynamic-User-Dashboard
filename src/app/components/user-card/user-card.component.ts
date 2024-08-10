import { Component, Input } from '@angular/core';
import { UserModel } from '../../core/models/user.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
 @Input() user!:UserModel;
}
