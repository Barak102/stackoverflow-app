import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OpModule } from 'src/op-module/op.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    OpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
