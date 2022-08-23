import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ComparePageComponent } from './page/compare-page/compare-page.component';
import { ProductDetailPageComponent } from './page/product-detail-page/product-detail-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { route } from './route';
import { MultiRangeSliderComponent } from './component/multi-range-slider/multi-range-slider.component';
import { CardMiniComponent } from './component/card-mini/card-mini.component';
import { CardCompareComponent } from './component/card-compare/card-compare.component';
import { CardCompareAddComponent } from './component/card-compare-add/card-compare-add.component';
import { ModalComponent } from './component/modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    ComparePageComponent,
    ProductDetailPageComponent,
    PageNotFoundComponent,
    ContentComponent,
    MultiRangeSliderComponent,
    CardMiniComponent,
    CardCompareComponent,
    CardCompareAddComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(route, { useHash: false }),
    NgxSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
