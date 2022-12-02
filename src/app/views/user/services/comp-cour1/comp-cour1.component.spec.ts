import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCour1Component } from './comp-cour1.component';

describe('CompCour1Component', () => {
  let component: CompCour1Component;
  let fixture: ComponentFixture<CompCour1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCour1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCour1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
