import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';
import { RadioQuestion } from './question-radiogroup';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      // new DropdownQuestion({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   options: [
      //     {key: 'solid',  value: 'Solid'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      //   order: 3
      // }),

      // new TextboxQuestion({
      //   key: 'firstName',
      //   label: 'First name',
      //   value: 'Bombasto',
      //   required: true,
      //   order: 1
      // }),

      new RadioQuestion({
        key: 'radioOption',
        label: 'Options with \'showAgentInfo\' function',
        value: 'sadsad',
        type: 'radio',
        function: 'showAgentInfo',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        required: true,
        order: 1
      }),
      new RadioQuestion({
        key: 'radioOption',
        label: 'Options with \'myFunction\' ',
        value: 'sadsad',
        type: 'radio',
        function: 'myFunction',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        required: true,
        order: 1
      }),
      new RadioQuestion({
        key: 'radioOption',
        label: 'Options with \'yourFunction\' function',
        value: 'sadsad',
        type: 'radio',
        function: 'yourFunction',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        required: true,
        order: 1
      })

      // new TextboxQuestion({
      //   key: 'emailAddress',
      //   label: 'Email',
      //   type: 'email',
      //   order: 2
      // })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
