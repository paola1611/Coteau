import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NombreGeneroPage } from './nombre-genero.page';

describe('NombreGeneroPage', () => {
  let component: NombreGeneroPage;
  let fixture: ComponentFixture<NombreGeneroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NombreGeneroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
