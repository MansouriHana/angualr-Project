import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create-product-reactive',
  templateUrl: './create-product-reactive.component.html',
  styleUrls: ['./create-product-reactive.component.css']
})
export class CreateProductReactiveComponent implements OnInit {
  public productForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
    image: new FormControl(null, Validators.required)
  });
  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      name: [null, Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      image: [null, Validators.required],
      isOnSale: [false, Validators.required]
    });
  }
  get name() {
    return this.productForm.get('name');
  }
  get image() {
    return this.productForm.get('image');
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.productForm.invalid) {
      console.log('Invalid Product form ');
    } else {
      console.log('Product Form Value ', this.productForm.value);
      this.productService.createProduct(this.productForm.value);
    }

  }
}
