import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Subject, catchError, filter, finalize, of, tap, throwError } from 'rxjs';
import { SpinnerService } from '../services/loading.service';


export const loadingInterceptor = () => {
    const fn: HttpInterceptorFn = (req, next) => {
    const spinnerService = inject(SpinnerService);
     
        
        if(!req.params.get('isSearchReq'))
        spinnerService.show();
        return next(req).pipe(
            catchError(() => {
                spinnerService.hide();
                return throwError(() => new Error('Error'!
                ));
            }),
            filter((x) => x instanceof HttpResponse),
            tap((x) => {
                spinnerService.hide();
            }),

        );
    };

    return fn;
};