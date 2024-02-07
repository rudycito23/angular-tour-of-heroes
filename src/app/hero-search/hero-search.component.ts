//  standard imports for Angular component and lifecycle interfaces
import { Component, OnInit } from '@angular/core';

//  importing RxJS classes for creating and handling Observables
import { Observable, Subject } from 'rxjs';

//  importing RxJS operators for transforming Observables
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

//  importing the Hero interface for type-checking
import { Hero } from '../hero';

//  importing the HeroService for data fetching
import { HeroService } from '../services/hero.service';

//  importing RouterModule for routing 
import { RouterModule } from '@angular/router';

//  importing CommonModules for common directives usage
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-search', // custom HTML tag to represent this component
  standalone: true,
  imports: [RouterModule, CommonModule],  //  lists of modules this component uses
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
})
//  
export class HeroSearchComponent implements OnInit {
  //  property to hold the search results as an Observable of Hero array
  heroes$!: Observable<Hero[]>;

  //  a Subject to push search terms into the Observable stream
  private searchTerms = new Subject<string>();

  //  constructor to inject the HeroService
  constructor(private heroService: HeroService) {}

  //  method to add a search term to the stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  //  lifecycle hook that initializes the component 
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      //  wait for 300ms of silence after each keystroke before considering the term
      debounceTime(300),

      //  ensure the term has changed before proceeding 
      distinctUntilChanged(),

      //  switch to new search Observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
