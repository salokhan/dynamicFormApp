import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './dynamic-form/question-base';
import { QuestionService } from './dynamic-form/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamicFormApp';
  questions$: Observable<QuestionBase<any>[]>;

  constructor(private service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
