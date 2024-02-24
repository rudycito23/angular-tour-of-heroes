import { Component, Input } from '@angular/core';

//  import ReactiveFormsModule for reactive forms
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//  import base class for questions
import { QuestionBase } from '../question-base';

@Component({
  standalone: true,
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  imports: [CommonModule, ReactiveFormsModule],
})
export class DynamicFormQuestionComponent {

  //  input property for questions
  @Input() question!: QuestionBase<string>;

  //  input property for FormGroup
  @Input() form!: FormGroup;

  //  getter to check if the form control is valid
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
