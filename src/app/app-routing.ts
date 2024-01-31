import { Route } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

//  Angular Route has two properties: path = a string that matches the URL in the browser address bar
//  && component = the component that the router should create when navigating to this route
export const routes: Route[] = [
  { path: 'heroes', component: HeroesComponent }, 
  
];
