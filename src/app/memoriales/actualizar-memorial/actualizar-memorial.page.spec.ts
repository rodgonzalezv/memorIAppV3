import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarMemorialPage } from './actualizar-memorial.page';

describe('ActualizarMemorialPage', () => {
  let component: ActualizarMemorialPage;
  let fixture: ComponentFixture<ActualizarMemorialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActualizarMemorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
