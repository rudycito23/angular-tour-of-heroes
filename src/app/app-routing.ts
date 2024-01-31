import { Route } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//  Angular Route has two properties: path = a string that matches the URL in the browser address bar
//  && component = the component that the router should create when navigating to this route
export const routes: Route[] = [
  { path: 'heroes', component: HeroesComponent }, 
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent }
];
