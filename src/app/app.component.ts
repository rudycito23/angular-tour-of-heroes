import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { QuestionBase } from './question-base';
import { QuestionService } from './services/question.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
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

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
