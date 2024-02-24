import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

//  import reactive forms modules
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from '../dynamic-form-question/dynamic-form-question.component';

//  import service to create FormGroup
import { QuestionControlService } from '../services/question-control.service';

//  import base class for questions
import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DynamicFormQuestionComponent],
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService],  //  service provider
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {

  //  input property to receive questions
  @Input() question: QuestionBase<string>[] | null = [];

  //  FormGroup to bind form controls
  form!: FormGroup;

  //  payLoad to display form values
  payLoad = '';

  //  inject QuestionControlService
  constructor(private qcs: QuestionControlService) {}

  //  OnInit lifecycle hook
  ngOnInit() {
    
    //  initialize form group
    this.form = this.qcs.toFormGroup(this.question as QuestionBase<string>[]);
  }

  //  submit even handler
  onSubmit() {

    //  get form values as JSON string
    this.payLoad = JSON.stringify(this.form.getRawValue);
  }
}
