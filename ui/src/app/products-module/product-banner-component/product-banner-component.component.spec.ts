import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBannerComponentComponent } from './product-banner-component.component';

describe('ProductBannerComponentComponent', () => {
  let component: ProductBannerComponentComponent;
  let fixture: ComponentFixture<ProductBannerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBannerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductBannerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
