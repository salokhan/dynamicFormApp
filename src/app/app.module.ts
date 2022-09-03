import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question/dynamic-form-question.component';
import { QuestionService } from './dynamic-form/question.service';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, DynamicFormModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [QuestionService]
})
export class AppModule {
  constructor() {
  }
}
