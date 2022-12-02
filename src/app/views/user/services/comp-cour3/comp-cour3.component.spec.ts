import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCour3Component } from './comp-cour3.component';

describe('CompCour3Component', () => {
  let component: CompCour3Component;
  let fixture: ComponentFixture<CompCour3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCour3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCour3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
