import { Component } from '@angular/core';
import { SpinnerService } from '../../core/services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent  {
   spinnerObs = this.spinnerService.spinnerState$;
  constructor(private spinnerService:SpinnerService) { }



}

