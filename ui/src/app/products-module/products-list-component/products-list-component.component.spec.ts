import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponentComponent } from './products-list-component.component';

describe('ProductsListComponentComponent', () => {
  let component: ProductsListComponentComponent;
  let fixture: ComponentFixture<ProductsListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
