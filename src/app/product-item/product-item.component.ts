import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product!: Product;
  constructor() { }

  ngOnInit(): void {
    //this.product = new Product(1,, "computer.jpg", 1000, true);
  
    this.product={
      id : 1,
      image : "computer.jpg",
      name : "Asus Laptop",
      price :1000,
      isOnSale :false,
      quantyCart:0
    }
  }
  increaseQuantity(): void {
   this.product.quantyCart++; 
  }
  decreaseQuantity(): void {
    if(this.product.quantyCart>0){
      this.product.quantyCart--
    }
  }
  counter(n: number): Array<number> {
    return Array(n);
  }
}
