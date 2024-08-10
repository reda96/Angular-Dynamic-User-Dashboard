import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { httpCacheInterceptor } from './core/interceptors/cache.interceptor';
import { usersReducer } from './core/store/users.reducer';
import { provideEffects } from '@ngrx/effects';
import { UsersEffects } from './core/store/users.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideStore({usersInfo:usersReducer}),
    provideEffects(UsersEffects),
    provideHttpClient(withFetch(), withInterceptors([
        httpCacheInterceptor({ globalTTL: 10800000 }),
    ])), provideEffects()]
};
