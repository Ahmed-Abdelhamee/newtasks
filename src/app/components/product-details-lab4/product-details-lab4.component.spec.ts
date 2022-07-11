import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsLab4Component } from './product-details-lab4.component';

describe('ProductDetailsLab4Component', () => {
  let component: ProductDetailsLab4Component;
  let fixture: ComponentFixture<ProductDetailsLab4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsLab4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsLab4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
