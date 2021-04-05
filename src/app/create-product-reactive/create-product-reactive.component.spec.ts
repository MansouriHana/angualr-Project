import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductReactiveComponent } from './create-product-reactive.component';

describe('CreateProductReactiveComponent', () => {
  let component: CreateProductReactiveComponent;
  let fixture: ComponentFixture<CreateProductReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
