import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPrincipalAdminComponent } from './pantalla-principal-admin.component';

describe('PantallaPrincipalAdminComponent', () => {
  let component: PantallaPrincipalAdminComponent;
  let fixture: ComponentFixture<PantallaPrincipalAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaPrincipalAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaPrincipalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
