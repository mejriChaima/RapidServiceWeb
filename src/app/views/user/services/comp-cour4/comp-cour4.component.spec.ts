import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCour4Component } from './comp-cour4.component';

describe('CompCour4Component', () => {
  let component: CompCour4Component;
  let fixture: ComponentFixture<CompCour4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCour4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCour4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
