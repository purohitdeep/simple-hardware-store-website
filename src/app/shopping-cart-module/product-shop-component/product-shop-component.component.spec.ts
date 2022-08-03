import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShopComponentComponent } from './product-shop-component.component';

describe('ProductShopComponentComponent', () => {
  let component: ProductShopComponentComponent;
  let fixture: ComponentFixture<ProductShopComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShopComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductShopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
