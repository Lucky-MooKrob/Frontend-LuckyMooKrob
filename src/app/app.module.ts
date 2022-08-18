import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ComparePageComponent } from './page/compare-page/compare-page.component';
import { ProductDetailPageComponent } from './page/product-detail-page/product-detail-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    ComparePageComponent,
    ProductDetailPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent,FooterComponent]
})
export class AppModule { }
