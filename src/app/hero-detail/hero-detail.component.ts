//  importing Angular core decorators and modules
import { Component, Input } from '@angular/core';
import { CommonModule, NgIf, UpperCasePipe } from '@angular/common';

//  importing FormsModule, which is needed for using forms and two-way data binding
import { FormsModule } from '@angular/forms';

//  importing the Hero interface
import { Hero } from '../hero';

//  needed to access route information
import { ActivatedRoute } from '@angular/router';

//  service for interacting with the browser's URL
import { Location } from '@angular/common';

//  service for fetching and updating hero data
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',  //  custom HTML tag to represent this component
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, UpperCasePipe],  //  imports necessary modules and directives
  templateUrl: './hero-detail.component.html',  //  HTML template for the component
  styleUrls: ['./hero-detail.component.css'], //  css styles for the component
})

export class HeroDetailComponent {
  @Input() hero?: Hero; //  input property to receive a hero object

  //  constructor to inject dependencies
  constructor(
    //  to access the current route information
    private route: ActivatedRoute,
   
    //  to fetch and update hero data
    private heroService: HeroService,

    //  to navigate back to the previous view
    private location: Location
  ) {}

  //  lifecycle hook that initializes the component
  ngOnInit(): void {
    this.getHero(); //  fetches the hero details when the component initializes
  }

  //  method to fetch the hero based on the ID from the route
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); //  retrieves the hero ID from URL
    //  fetches the hero and assigns it to the 'hero' property
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  //  method to navigate back to the previous view
  goBack(): void {
    this.location.back(); //  uses the Location service to navigate back 
  }

  //  method to save changes made to the hero
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
      //  updates the hero and then navigates back upon success
      .subscribe(() => this.goBack());
    }
  }
}
