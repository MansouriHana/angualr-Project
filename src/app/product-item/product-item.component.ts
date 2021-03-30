import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Product } from '../product/product';
import { ProductQuantityChange } from '../product/product-quantity-change';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() public product!: Product;
  @Output() private quantityChange: EventEmitter<ProductQuantityChange> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  increaseQuantity(): void {
   this.quantityChange.emit({product:this.product, quantyCart:1});
  }
  decreaseQuantity(): void {
    this.quantityChange.emit({product:this.product, quantyCart:-1});
  }
  counter(n: number): Array<number> {
    return Array(n);
  }
}
