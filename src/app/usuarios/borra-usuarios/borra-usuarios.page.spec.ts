import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorraUsuariosPage } from './borra-usuarios.page';

describe('BorraUsuariosPage', () => {
  let component: BorraUsuariosPage;
  let fixture: ComponentFixture<BorraUsuariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BorraUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
