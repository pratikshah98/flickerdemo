import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlickerdetailComponent } from './component/flickerdetail/flickerdetail.component';
import { FlickerComponent } from './component/flicker/flicker.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    FlickerdetailComponent,
    FlickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    NgModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
