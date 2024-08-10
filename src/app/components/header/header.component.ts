import { Component, ElementRef, OnInit, Renderer2, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumberInputEvent, InputNumberModule } from 'primeng/inputnumber';
import { UsersService } from '../../core/services/users-service.service';
import { CommonModule } from '@angular/common';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputNumberModule, FormsModule, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  searchResultObs = this.usersService.searchResult$;
  isSearchOpen = false;
  isUserDetailsRoute = false;
  @ViewChild('searchResultDiv') searchResultDiv !: ElementRef;

  constructor(private renderer: Renderer2,
    private usersService: UsersService,
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {

      if (e.target !== this.searchResultDiv.nativeElement && (e.target as Element).id !== 'userIdInput') {
        this.isSearchOpen = false;
      }
    });
  }
  ngOnInit() {

  }
  searchWithUserId(event: InputNumberInputEvent) {
    this.isSearchOpen = true;
    if (event.value)
      this.usersService.searchWtiUserId(+event.value);
  }


}
