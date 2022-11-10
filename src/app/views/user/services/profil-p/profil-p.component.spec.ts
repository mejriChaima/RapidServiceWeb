import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPComponent } from './profil-p.component';

describe('ProfilPComponent', () => {
  let component: ProfilPComponent;
  let fixture: ComponentFixture<ProfilPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
