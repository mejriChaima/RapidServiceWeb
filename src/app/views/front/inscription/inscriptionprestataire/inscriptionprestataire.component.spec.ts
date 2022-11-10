import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionprestataireComponent } from './inscriptionprestataire.component';

describe('InscriptionprestataireComponent', () => {
  let component: InscriptionprestataireComponent;
  let fixture: ComponentFixture<InscriptionprestataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionprestataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionprestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
