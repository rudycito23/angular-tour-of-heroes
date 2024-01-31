# Angular Tour Of Heroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Standalone and NgModule

For the most part, the need for NgModule files are significantly reduced, but there are 
still scenarios where you might need or prefer to use an NgModule.

1. Large apps: large apps with complex dependencies and configurations, using 
    NgModules can help organize and manage the codebase more effectively.

2. Lazy loading: if you're implementing lazy loading for parts of your app, NgModules 
    are currently required. Angular's router relies on NgModules for lazy loading 
    feature modules.

3. Third-party libraries: some third-party Angular libraries might still require 
    the use of NgModules for proper integration; until these libraries support the 
    standalone feature, you will need NgModules to import and configure them.

4. Shared modules: if you have a set of components, directives, or pipes that are 
    frequently reused across different parts of your application, creating a 
    SharedModule can be useful. However, with the standalone feature, this need 
    might be less pronounced as components can import only what they need.

5. Advanced configuration: NgModules offer specific configuration options like 
    providers array for services, entryComponents for dynamically loaded components, 
    and more. In cases where specific configurations are needed, NgModules can be useful.

6. Migration and compatibility: for existing Angular apps that are being migrated 
    gradually to the standalone feature, you may still have NgModules until the 
    migration is complete; compatibility with tools or libraries that have not yet 
    adopted standalone features may also require the use of NgModules.

While the standalone feature offers a more streamlined and modular approach, 
NgModules still have their place in Angular apps, especially for specific architectural 
patterns, advanced configurations, compatibility with libraries, and lazy loading 
scenarios. Over time, as the ecosystem evolves, the reliance of NgModules may decrease.

## Standalone app setup

main.ts
    
import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing';

bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideRouter(routes)],
}).catch((err) => console.error(err));


app.component.ts

import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent, MessagesComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}


app.component.html

<h1>{{title}}</h1>

<!-- users should be able to click a link to navigate rather than pasting a route URL 
        into the address bar. Adding a <nav> element and within that, an anchor <a>
        element that, when clicked, triggers navigation to the HeroesComponent.

        A routerLink attribute is set to "/heroes", the string that the router matches 
        to the route to HeroesComponent; the routerLink is the selector for the 
        RouterLink directive that turns user clicks into router navigations; it is 
        another public directive in the RouterModule. -->
<nav>
<a routerLink="/heroes">Heroes</a>
</nav>
<router-outlet></router-outlet>
<app-messages></app-messages>