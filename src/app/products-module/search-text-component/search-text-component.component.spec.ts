import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTextComponentComponent } from './search-text-component.component';

describe('SearchTextComponentComponent', () => {
  let component: SearchTextComponentComponent;
  let fixture: ComponentFixture<SearchTextComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTextComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
