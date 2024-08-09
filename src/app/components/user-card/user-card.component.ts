import { Component, Input } from '@angular/core';
import { UserModel } from '../../core/models/user.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
 @Input() user!:UserModel;
}
