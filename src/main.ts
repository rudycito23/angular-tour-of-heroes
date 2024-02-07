//  importing bootstrapAoolication and provideProtractorTestingSupport
//  bootstrapApplication is used to bootstrap standalone Angular apps
//  provideProtractorTestingSupport is a utility for Protractor testing support
import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from '@angular/platform-browser';

//  importing HttpClieentInMemoryWebApiModule to mock backend repsonses
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

//  importing InMemoryDataService, which will be used with HttpClientInMemoryWebApiModule to simulate a database
import { InMemoryDataService } from './app/services/in-memory-data.service';

//  importing HttpClientModule to enable HTTP communication in the app
import { HttpClientModule } from '@angular/common/http';

//  importing AppComponent from the app component file
//  this is the root component of the app
import { AppComponent } from './app/app.component';

//  importing provideRouter
//  this function is used to provide routing configuration for the app
import { provideRouter } from '@angular/router';

//  importing routes from the app-routing file
//  this is where the route configuration for the application are defined
import { routes } from './app/app-routing';

//  importing importProvidersFrom to import providers in a standalone-compatible way
import { importProvidersFrom } from '@angular/core';

//  bootstapping the app with the root component (AppComponent)
//  the bootstrapApplication function is used to start the app
//  it takes the root component and an options object as arguments
bootstrapApplication(AppComponent, {
  //  the providers array is used to provide additional services or configurations
  //  provideProtractorTestingSupport() is added for Protractor testing support
  //  provideRouter(routes) is used to provide the route configurations defined in app-routing
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routes),
    importProvidersFrom([
      HttpClientModule, //  making HTTP functionalities available across the app
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),  //  configuring the in-memory we API with the data service
    ]),
  ],
}).catch((err) => console.error(err)); //  catch and log any errors during the bootstrap process
