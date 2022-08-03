import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSummaryComponentComponent } from './products-summary-component.component';

describe('ProductsSummaryComponentComponent', () => {
  let component: ProductsSummaryComponentComponent;
  let fixture: ComponentFixture<ProductsSummaryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSummaryComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsSummaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
