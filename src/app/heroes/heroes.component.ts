{
  /* To generate a new component = ng generate component heroes --skip-import
    --skip-import flag is required to skip importing NgModule */
}

import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common'; // provides common directive and pipes
import { FormsModule } from '@angular/forms'; // provides support for template-driven forms: ngModel
import { Hero } from '../hero'; // importing the Hero interface from hero.ts
import { HEROES } from '../mock-heroes'; // importing the HEROES array from mock-heroes.ts
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';
import { RouterModule } from '@angular/router';

// Component decorator providing metadata for the HeroesComponent
@Component({
  selector: 'app-heroes', // defines the custom HTML tag: <app-heroes></app-heroes>
  standalone: true, // standalone component and can be used without NgModule
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    HeroDetailComponent,
    RouterModule,
  ], // imports necessary for this component
  templateUrl: './heroes.component.html', // path to HTML template
  styleUrls: ['./heroes.component.css'], // path to CSS styles
})
export class HeroesComponent {
  // property hero of type Hero with initial values
  /*hero: Hero = {
    id: 1,
    name: 'Spider-Man' // default hero name
  };
*/

  /*
  selectedHero?: Hero; // property to hold the currently selected hero; type = Hero
   this is no longer used after implementing paraterized dashboard route*/

  heroes: Hero[] = []; //  array to store heroes fetched from the HeroService

  //  constructor to inject HeroService and MessageService
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  //  OnInit lifecycle hook to perform initialization tasks
  ngOnInit(): void {
    this.getHeroes(); //  call getHeroes() to fetch hero data on component initialization
  }

  //  method to handle the selection of a hero; it sets the selectedHero property to the hero passed as an argument
  /* onSelect(hero: Hero): void {  //  no longer used after implementing parameterized dashboard route
    this.selectedHero = hero; //  set the selectedHero to the chosen hero
    this.messageService.add(`HeroesComponent: Selected hero id = ${hero.id}`); //  log a message about hero selection
  }
*/

  //  method to retrieve heroes from the HeroService
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes)); //  subscribe to the observable and assign fetched heroes to the heroes array
  }

  //  defines the 'add' method that takes a string argument 'name' for the new hero's name
  add(name: string): void {
    //  trims whitespace from both ends of the 'name' string to ensure no extra whitespace
    name = name.trim();

    //  checks if the 'name' is empty after trimming; if it is, the method exits early
    //  this prevents adding empty-named heroes
    if (!name) { return }

    //  calls 'addHero' method on the 'heroService' with an object that fits the 'Hero' interface,
    //  using the 'name' provided; since only 'name' is known, it casts the object as 'Hero'
    //  'addHero' returns an Observable<Hero>, to which we subscribe to wait for the response
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      
      //  once the hero is successfully added and returned bu the server,
      //  it's pushed into the 'heroes' array to update the UI
      this.heroes.push(hero);
    });
  }

  //  defines the 'delete' method that takes a 'Hero' object as an argument
  delete(hero: Hero): void {

    //  updates the 'heroes' array by filtering out the hero to be deleted
    //  'filter' returns a new array excluding the hero that matches the condition 
    this.heroes = this.heroes.filter(h => h !== hero);

    //  calls 'deleteHero' method on the 'heroService' passing the 'id' of the hero to be deleted
    //  'deleteHero' return an Observable, to which we subscribe
    //  even though we don't need to do anything with the result in this case,
    //  subscribing is necessary to ensure the delete request is sent
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
