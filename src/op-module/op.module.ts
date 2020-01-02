import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSectionComponent } from './left-section/left-section.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RightSectionComponent } from './right-section/right-section.component';
import { QuestionItemComponent } from './left-section/question-item/question-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OpSearchService } from './services/op-search.service';



@NgModule({
  declarations: [
    LeftSectionComponent,
    SearchBarComponent,
    RightSectionComponent,
    QuestionItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    LeftSectionComponent,
    SearchBarComponent,
    RightSectionComponent,
    QuestionItemComponent
  ],
  providers: [OpSearchService]
})
export class OpModule { }
