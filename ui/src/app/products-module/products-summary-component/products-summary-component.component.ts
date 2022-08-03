import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from "src/app/models/ProductModel";

@Component({
  selector: 'app-products-summary-component',
  templateUrl: './products-summary-component.component.html',
  styleUrls: ['./products-summary-component.component.scss']
})
export class ProductsSummaryComponentComponent implements OnInit {

  @Input() product!: ProductModel;
  
  constructor() { }

  ngOnInit(): void {
  }

}
