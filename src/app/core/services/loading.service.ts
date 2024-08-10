import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  showSpinner = false;
  spinnerSubject: BehaviorSubject<boolean>;

  constructor() {
    this.spinnerSubject = new BehaviorSubject<boolean>(false);
  }

  get spinnerState$(): Observable<boolean> {


    return this.spinnerSubject.asObservable();
  }

  public show() {
  
    this.spinnerSubject.next(true);
  }

  public hide() {
  
    this.spinnerSubject.next(false);
  }
}
