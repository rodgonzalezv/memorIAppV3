import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditaUsuarioPage } from './edita-usuario.page';

describe('EditaUsuarioPage', () => {
  let component: EditaUsuarioPage;
  let fixture: ComponentFixture<EditaUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditaUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
