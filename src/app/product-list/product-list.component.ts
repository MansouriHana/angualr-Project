import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product';
import { ProductQuantityChange } from '../product/product-quantity-change';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  products!:Observable<Product[]>;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    console.log(">>>>>>>>>>>>>>>>> ngOnInit>>>>>>>>>>>>><<")
    this.products=this.productService.getProductList();
  }
  onChangeQuantity(pch: ProductQuantityChange): void {
  /*const product=  this.products.find(prod=>{
    return prod.id==pch.product.id;
  });
  product!.quantyCart+=pch.quantyCart;
  */
   //this.products[pch.product.id-1].quantyCart+=pch.quantyCart;
   console.log("onChangeQuantity>>>")
   this.productService.changeQuantity(pch);
   
  }
  loadingProduct(): void{
    this.products=this.productService.getProductList();
  }

}
