import { Component, OnInit } from '@angular/core';
import { OpSearchService } from './../services/op-search.service';
import { IQuestionData } from '../types/IQuestionData';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.scss']
})
export class RightSectionComponent implements OnInit {

  public selectedQuestion: IQuestionData;
  constructor(private opSearchService: OpSearchService) { }

  ngOnInit() {
    this.opSearchService.selectedQuestion$.subscribe(question => {
      this.selectedQuestion = question;
    });
  }

}
