import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDeletePage } from './product-delete.page';

describe('ProductDeletePage', () => {
  let component: ProductDeletePage;
  let fixture: ComponentFixture<ProductDeletePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
