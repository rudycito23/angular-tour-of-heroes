import { Injectable } from '@angular/core';
import { DropdownQuestion } from '../question-dropdown';

//  import question types
import { QuestionBase } from '../question-base';
import { TextboxQuestion } from '../question-textbox';

//  import 'of' to return an observable
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root', //  provide this service to the app globally
})
export class QuestionService {
  //  TODO: get from a remote source of question metadata
  getQuestions() {  //  method to get the questions

    //  define an array 'questions', mixing different types
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({  //  dropdown question
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3,
      }),

      new TextboxQuestion({ //  textbox question for first name
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
      }),

      new TextboxQuestion({ //  textbox question for email
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
    ];

    //  return the 'questions' array as an Observable sorted by 'order'
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
