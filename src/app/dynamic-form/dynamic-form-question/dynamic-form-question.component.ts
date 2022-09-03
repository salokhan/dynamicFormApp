import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base';


@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  radioFunction: Function;
  constructor() {
    this.radioFunction = (() => { });
  }
  get isValid() { return this.form.controls[this.question.key].valid; }

  ngOnInit(): void {
    if (this.question.function && this.question.function !== "" && (this as any)[this.question.function]) {
      this.radioFunction = (this as any)[this.question.function];
    }
  }

  showAgentInfo(e: any) {
    console.log(e);
    alert('showAgentInfo');
  }

  myFunction(e: any) {
    console.log(e);
    alert('myFunction');
  }

  yourFunction(e: any) {
    console.log(e);
    alert('yourFunction');
  }

}
