import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DynamicFormQuestionComponent,
    DynamicFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [DynamicFormComponent,DynamicFormQuestionComponent]
})
export class DynamicFormModule { }
