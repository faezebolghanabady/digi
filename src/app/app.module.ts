import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HederComponent } from './page/heder/heder.component';
import { SearchbarComponent } from './sheard/searchbar/searchbar.component';
import { AmazingofferComponent } from './page/amazingoffer/amazingoffer.component';
import { Card1Component } from './sheard/card1/card1.component';
import { SupermarketComponent } from './page/supermarket/supermarket.component';
import { ProductComponent } from './sheard/product/product.component';
import { ProductInfoComponent } from './sheard/product/product-info/product-info.component';
import { HeaderComponent } from './sheard/header/header.component';
import { ProductPriceComponent } from './sheard/product-price/product-price.component';

@NgModule({
  declarations: [
    AppComponent,
    HederComponent,
    SearchbarComponent,
    AmazingofferComponent,
    Card1Component,
    SupermarketComponent,
    ProductComponent,
    ProductInfoComponent,
    HeaderComponent,
    ProductPriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
