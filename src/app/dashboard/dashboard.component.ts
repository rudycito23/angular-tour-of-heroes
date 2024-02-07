//  importing the Component decorator to define a new component
import { Component } from '@angular/core';

//  importing CommonModule which provides common directives such as ngIf and ngFor
import { CommonModule } from '@angular/common';

//  importing the Hero interface to type-check the data used within this component
import { Hero } from '../hero';

//  importing the HeroService, a service to fetch hero data
import { HeroService } from '../services/hero.service';

//  importing RouterModule to enable routing functionalities within this component
import { RouterModule } from '@angular/router';

//  importing HeroSearchComponent to include it within the Dashboard component
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-dashboard', //  the css selector that indentifies this component in a template
  standalone: true, //  indicates that this component does not require an Angular module
  //  list of standalone components or modules used in this component
  imports: [CommonModule, RouterModule, HeroSearchComponent],
  templateUrl: './dashboard.component.html',  //  path to the template file for this component
  styleUrls: ['./dashboard.component.css'], //  path to the styles for this component
})
//  class declaration for the component
export class DashboardComponent {
  //  property to hold the list of heroes to display on the dashboard
  heroes: Hero[] = [];

  //  constructor that injects the HeroService into this component
  constructor(private heroService: HeroService) {}

  //  lifecycle hook that is called after Angular has initialized all data-bound properties of a directive
  ngOnInit(): void {
    this.getHeroes(); //  calls getHeroes method to fetch heroes when the component initializes
  }

  //  method to retrieve heroes from the HeroService
  getHeroes(): void {
    this.heroService
      .getHeroes()  //  calls getHeroes method from HeroService which returns an Observable
      //  subscribes to the Observable, and sets the heroes property to the first 4 heroes returned
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
