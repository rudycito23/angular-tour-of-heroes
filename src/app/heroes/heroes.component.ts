{
  /* To generate a new component = ng generate component heroes --skip-import
    --skip-import flag is required to skip importing NgModule */
}

{
  /*  */
}
import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common'; // provides common directive and pipes
import { FormsModule } from '@angular/forms'; // provides support for template-driven forms: ngModel
import { Hero } from '../hero'; // importing the Hero interface from hero.ts
import { HEROES } from '../mock-heroes';  // importing the HEROES array from mock-heroes.ts

// Component decorator providing metadata for the HeroesComponent
@Component({
  selector: 'app-heroes', // defines the custom HTML tag: <app-heroes></app-heroes>
  standalone: true, // standalone component and can be used without NgModule
  imports: [CommonModule, FormsModule, NgFor], // imports necessary for this component
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

  //  expose the HEROES array for binding in the component's template
  heroes = HEROES;

  selectedHero?: Hero;  // property to hold the currently selected hero; type = Hero
  //  method to handle the selection of a hero; it sets the selectedHero property to the hero passed as an argument
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
