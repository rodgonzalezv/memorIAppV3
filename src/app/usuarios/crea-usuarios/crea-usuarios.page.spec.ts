import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreaUsuariosPage } from './crea-usuarios.page';

describe('CreaUsuariosPage', () => {
  let component: CreaUsuariosPage;
  let fixture: ComponentFixture<CreaUsuariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreaUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
