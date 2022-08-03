import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMainComponentComponent } from './product-main-component.component';

describe('ProductMainComponentComponent', () => {
  let component: ProductMainComponentComponent;
  let fixture: ComponentFixture<ProductMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMainComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
