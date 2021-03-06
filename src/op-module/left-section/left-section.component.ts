import { IQuestion } from '../types/IQuestion';
import { pipe } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OpSearchService } from 'src/op-module/services/op-search.service';
import { map } from 'rxjs/operators';
import { IQuestionData } from 'src/op-module/types/IQuestionData';


@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.scss']
})
export class LeftSectionComponent implements OnInit {


  questions: IQuestion[] = [];
  constructor(private opSearchService: OpSearchService) { }





  ngOnInit() {
    this.opSearchService.questionsResults$.pipe(map(results => results.map((r: any) => {
      const questionItem: IQuestion =
      {
        title: r.title,
        data: <IQuestionData>{
          url: r.link,
          views: r.view_count,
          score: r.score
        }
      };
      return questionItem;
    })
    )).subscribe((questions: IQuestion[]) => this.questions = questions);
  }


  questionClickHandler(selectedQuestion: IQuestion): void {
    this.opSearchService.selectedQuestion$.next(selectedQuestion.data);
  }
}
