import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLab4Component } from './product-lab4.component';

describe('ProductLab4Component', () => {
  let component: ProductLab4Component;
  let fixture: ComponentFixture<ProductLab4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLab4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLab4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
