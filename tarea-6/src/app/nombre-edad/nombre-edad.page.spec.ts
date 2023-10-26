import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NombreEdadPage } from './nombre-edad.page';

describe('NombreEdadPage', () => {
  let component: NombreEdadPage;
  let fixture: ComponentFixture<NombreEdadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NombreEdadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
