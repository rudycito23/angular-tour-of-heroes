import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

//  import the base class for questions
import { QuestionBase } from './question-base';

//  import service to fetch questions
import { QuestionService } from './services/question.service';

//  import RxJS Observable for async operations
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  //  list of modules and components this component uses
  imports: [
    HeroesComponent,
    MessagesComponent,
    RouterModule,
    DynamicFormComponent,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';

  //  Observable to hold th questions
  questions$: Observable<QuestionBase<any>[]>;


  constructor(service: QuestionService) { //  inject QuestionService 
    this.questions$ = service.getQuestions(); //  fetch questions from the service
  }
}
