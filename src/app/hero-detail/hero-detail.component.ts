import { Component, Input } from '@angular/core';
import { CommonModule, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    //  ActivatedRoute holds information about the route to this instance of the HeroDetailComponent;
    //  this component is interested in the route's parameters extracted from the URL;
    //  the "id" parameter is the id of the hero to display

    //  gets hero data from the remote server and this component uses it to get
    //  the hero-to-dispaly
    private heroService: HeroService,

    //  the location is an Angular service for interacting with the browser;
    //  this service lets you navigate back to the previous view
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }
}
