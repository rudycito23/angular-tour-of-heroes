/* Inject the MessageService into the HeroService which is injected into the HeroesComponent;
    this is know as service-in-service scenario */

/*  */

import { Injectable } from '@angular/core'; //  importing Injectable decorator
import { Hero } from '../hero'; //  importing Hero interface
import { HEROES } from '../mock-heroes'; //  Importing the HEROES array which contains mock data
import { Observable, of } from 'rxjs'; //  importing Observable and of from rxjs, which is used for reactive programming
import { MessageService } from './message.service'; //  importing MessageService, a service for handling messages

//  Injectable decorator marks this class as available to be provided and injected as a dependency
@Injectable({
  providedIn: 'root', //  indicates that this service should be provided in the root injector
})
export class HeroService {
  //  constructor to inject MessageService
  constructor(private messageService: MessageService) {}

  //  getHeroes method returns an Observable of Hero array
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); //  wraps HEROES in an Observable
    this.messageService.add('HeroService: fetched heroes');
    return heroes; //  returns the Observable
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
