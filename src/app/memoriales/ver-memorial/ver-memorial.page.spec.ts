import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerMemorialPage } from './ver-memorial.page';

describe('VerMemorialPage', () => {
  let component: VerMemorialPage;
  let fixture: ComponentFixture<VerMemorialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerMemorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
