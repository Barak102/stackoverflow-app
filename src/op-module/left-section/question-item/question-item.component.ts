import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IQuestion } from 'src/op-module/types/IQuestion';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent implements OnInit {

@Input()
public questionItem: IQuestion;

@Output()
public itemClicked: EventEmitter<IQuestion> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  displayData(): void {
    debugger;
    this.itemClicked.emit(this.questionItem);
  }

}
