import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Product } from '../product/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
   product!: Product;
  constructor() { }

  ngOnInit(): void {
  }

  createProduct(formProduct: any) {
    console.log(formProduct);
    if (formProduct.invalid) {
      console.error("your form is invalid ");
    } else {
      this.product = formProduct.value.product;
      console.log(JSON.stringify(this.product));
    }

  }

}
