import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { ProductBannerComponentComponent } from './product-banner-component/product-banner-component.component';
import { SearchTextComponentComponent } from './search-text-component/search-text-component.component';
import { ProductsListComponentComponent } from './products-list-component/products-list-component.component';
import { ProductsSummaryComponentComponent } from './products-summary-component/products-summary-component.component';
import { ProductMainComponentComponent } from './product-main-component/product-main-component.component';



@NgModule({
  declarations: [
    ProductBannerComponentComponent,
    SearchTextComponentComponent,
    ProductsListComponentComponent,
    ProductsSummaryComponentComponent,
    ProductMainComponentComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    ProductMainComponentComponent
  ]
})
export class ProductsModuleModule { }
