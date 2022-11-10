import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionprestataireComponent } from './gestionprestataire.component';

describe('GestionprestataireComponent', () => {
  let component: GestionprestataireComponent;
  let fixture: ComponentFixture<GestionprestataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionprestataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionprestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
