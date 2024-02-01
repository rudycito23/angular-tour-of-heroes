{
  /* To generate a new component = ng generate component heroes --skip-import
    --skip-import flag is required to skip importing NgModule */
}

{
  /*  */
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
}
