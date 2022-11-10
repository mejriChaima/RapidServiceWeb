import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantSComponent } from './enfant-s.component';

describe('EnfantSComponent', () => {
  let component: EnfantSComponent;
  let fixture: ComponentFixture<EnfantSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
