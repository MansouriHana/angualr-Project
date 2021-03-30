import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductQuantityChange } from '../product/product-quantity-change';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  products!:Product[];
  constructor() { }

  ngOnInit(): void {
    this.products=[
      {
        id:1,
        name:"computer",
        image:"laptop.jpg",
        price: 2000,
        isOnSale: true,
        quantyCart: 10
      },
      {
        id:2,
        name:"Laptop",
        image:"computer.jpg",
        price: 2000,
        isOnSale: true,
        quantyCart: 10
      },
      {
        id:3,
        name:"mouse",
        image:"mouse.jpg",
        price: 2000,
        isOnSale: true,
        quantyCart: 10
      }
    ];
  }
  onChangeQuantity(pch: ProductQuantityChange): void {
  /*const product=  this.products.find(prod=>{
    return prod.id==pch.product.id;
  });
  product!.quantyCart+=pch.quantyCart;
  */
   this.products[pch.product.id-1].quantyCart+=pch.quantyCart;
  }
  

}
