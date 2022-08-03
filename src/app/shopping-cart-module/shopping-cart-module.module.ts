import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductShopComponentComponent } from './product-shop-component/product-shop-component.component';
import { ShoppingCartComponentComponent } from './shopping-cart-component/shopping-cart-component.component';



@NgModule({
  declarations: [
    ProductShopComponentComponent,
    ShoppingCartComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShoppingCartComponentComponent
  ]
})
export class ShoppingCartModuleModule { }
