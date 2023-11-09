import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaMemorialesPage } from './lista-memoriales.page';

describe('ListaMemorialesPage', () => {
  let component: ListaMemorialesPage;
  let fixture: ComponentFixture<ListaMemorialesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaMemorialesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
