import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SplashScreenComponent } from './pages/spalsh-screen/spalsh-screen.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { SignupComponent } from './components/signup/signup.component';
import { RecommendedComponent } from './pages/recommended/recommended.component';


export const appRoutes: Routes = [
  { path: '', component: SplashScreenComponent },
  { path: 'game/:id', component: GameDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginSignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'signup', component:  SignupComponent}, // Reusing same component
  { path: 'recommended', component: RecommendedComponent },
  { path: '**', redirectTo: '' }, // Redirect unknown routes to home
];
