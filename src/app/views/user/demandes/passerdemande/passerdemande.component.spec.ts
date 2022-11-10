import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasserdemandeComponent } from './passerdemande.component';

describe('PasserdemandeComponent', () => {
  let component: PasserdemandeComponent;
  let fixture: ComponentFixture<PasserdemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasserdemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasserdemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
