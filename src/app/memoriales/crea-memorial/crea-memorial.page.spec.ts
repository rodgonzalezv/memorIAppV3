import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreaMemorialPage } from './crea-memorial.page';

describe('CreaMemorialPage', () => {
  let component: CreaMemorialPage;
  let fixture: ComponentFixture<CreaMemorialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreaMemorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
