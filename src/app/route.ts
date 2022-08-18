import { Routes } from "@angular/router";
import { ComparePageComponent } from "./page/compare-page/compare-page.component";
import { HomePageComponent } from "./page/home-page/home-page.component";
import { PageNotFoundComponent } from "./page/page-not-found/page-not-found.component";
import { ProductDetailPageComponent } from "./page/product-detail-page/product-detail-page.component";

export const route: Routes = [
    { path: 'product', component: HomePageComponent, pathMatch: 'prefix'},
    { path: 'products/:id', component: ProductDetailPageComponent},
    { path: 'compare', component: ComparePageComponent},
    { path: '', redirectTo: 'product', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
  ]