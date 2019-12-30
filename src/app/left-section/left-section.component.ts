import { IQuestion } from './../../types/IQuestion.d';
import { pipe } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OpSearchService } from 'src/services/op-search.service';
import { map } from 'rxjs/operators';


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
        const questionItem: IQuestion = { title: r.title, url: r.url };
        return questionItem;
      })
    )).subscribe((questions: IQuestion[]) => this.questions = questions);

  }
}
