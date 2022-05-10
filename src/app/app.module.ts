import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HederComponent } from './page/heder/heder.component';
import { SearchbarComponent } from './sheard/searchbar/searchbar.component';
import { AmazingofferComponent } from './page/amazingoffer/amazingoffer.component';
import { Card1Component } from './sheard/card1/card1.component';

@NgModule({
  declarations: [
    AppComponent,
    HederComponent,
    SearchbarComponent,
    AmazingofferComponent,
    Card1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
