import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaColeccionComponent } from './pantalla-coleccion.component';

describe('PantallaColeccionComponent', () => {
  let component: PantallaColeccionComponent;
  let fixture: ComponentFixture<PantallaColeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaColeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaColeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
