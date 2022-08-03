import { Component, OnInit } from '@angular/core';
import { ProductModel } from "src/app/models/ProductModel";
import { ProductListingService } from './product-listing.service';

@Component({
  selector: 'app-products-list-component',
  templateUrl: './products-list-component.component.html',
  styleUrls: ['./products-list-component.component.scss']
})
export class ProductsListComponentComponent implements OnInit {
  productsList: ProductModel[];

  constructor(productListingService:ProductListingService) { 
    this.productsList = productListingService.getProductLists();
  }

  ngOnInit(): void {
  }

}
