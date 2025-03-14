import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';
import { HeaderComponent } from './components/header/header.component';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(appRoutes)],
// };

export const appConfig = {
 providers: [
    provideRouter(appRoutes, withComponentInputBinding()),  // Correct route injection
  ],
  imports: [HeaderComponent],
};





  