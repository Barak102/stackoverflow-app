import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RightSectionComponent } from './right-section/right-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSectionComponent,
    SearchBarComponent,
    RightSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
