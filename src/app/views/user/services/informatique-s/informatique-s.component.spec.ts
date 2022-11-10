import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformatiqueSComponent } from './informatique-s.component';

describe('InformatiqueSComponent', () => {
  let component: InformatiqueSComponent;
  let fixture: ComponentFixture<InformatiqueSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformatiqueSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformatiqueSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
