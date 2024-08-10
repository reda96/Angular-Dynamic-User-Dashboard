import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './core/services/loading.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,SpinnerComponent,CommonModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('container') containerRef!:ElementRef;
  title = 'Angular-Dynamic-User-Dashboard';
  spinnerObs = this.spinnerService.spinnerState$;
  constructor(private spinnerService:SpinnerService){}
  onInit() {
    this.spinnerObs.subscribe((loading:boolean) => 
    {
      if(loading)
        {
          this.containerRef.nativeElement.classList.add('class');
        }else {
          this.containerRef.nativeElement.classList.remove('class');
  
        }
    }
    )
  }
}