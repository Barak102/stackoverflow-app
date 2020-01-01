import { Component, OnInit } from '@angular/core';
import { IQuestionData } from 'src/types/IQuestionData';
import { OpSearchService } from 'src/services/op-search.service';

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
