import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeserviceComponent } from './demandeservice.component';

describe('DemandeserviceComponent', () => {
  let component: DemandeserviceComponent;
  let fixture: ComponentFixture<DemandeserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
