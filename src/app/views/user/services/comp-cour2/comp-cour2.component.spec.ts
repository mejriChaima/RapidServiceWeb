import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCour2Component } from './comp-cour2.component';

describe('CompCour2Component', () => {
  let component: CompCour2Component;
  let fixture: ComponentFixture<CompCour2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCour2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCour2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
