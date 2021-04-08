import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../product/product';
import { ProductQuantityChange } from '../product/product-quantity-change';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  constructor() {
    this.products = [
      {
        id: 1,
        name: "computer",
        image: "laptop.jpg",
        price: 2000,
        isOnSale: true,
        quantyCart: 10
      },
      {
        id: 2,
        name: "Laptop",
        image: "computer.jpg",
        price: 2000,
        isOnSale: true,
        quantyCart: 10
      },
      {
        id: 3,
        name: "mouse",
        image: "mouse.jpg",
        price: 2000,
        isOnSale: true,
        quantyCart: 10
      }
    ];
  }
  getProductList(): Observable<Product[]> {
    return of(this.products);
  }
  createProduct(item: Product) {
    console.log("<<<>>>>>>>  createProduct>>>>> ")
    let productClone= Object.assign({}, item);
    console.log(JSON.stringify(item))
    productClone.id = this.products.length + 1;
    productClone.quantyCart = 0;
    console.log(JSON.stringify(item))
    this.products.push(productClone);
    return of(productClone);
  }
  changeQuantity(pch: ProductQuantityChange) {
    console.log("changeQuantity>>>")
    this.products[pch.product.id - 1].quantyCart += pch.quantyCart;
  }
}
