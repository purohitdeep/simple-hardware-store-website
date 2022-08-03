import { Injectable } from '@angular/core';
import { ProductModel } from "src/app/models/ProductModel";

@Injectable({
  providedIn: 'root'
})
export class ProductListingService {

  constructor() { }

  getProductLists(): ProductModel[] {
    return [{"name":"name1","id":"id1", "qtyAvailble": "10", "image":"image1", "price":"90", "description": "important"},
    {"name":"name2","id":"id2", "qtyAvailble": "1", "image":"image2", "price":"10", "description": "very"}]
  }


  
}
