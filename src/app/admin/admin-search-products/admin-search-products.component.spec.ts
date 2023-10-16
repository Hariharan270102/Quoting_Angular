import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSearchProductsComponent } from './admin-search-products.component';

describe('AdminSearchProductsComponent', () => {
  let component: AdminSearchProductsComponent;
  let fixture: ComponentFixture<AdminSearchProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSearchProductsComponent]
    });
    fixture = TestBed.createComponent(AdminSearchProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
