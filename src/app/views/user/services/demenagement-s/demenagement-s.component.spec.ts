import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemenagementSComponent } from './demenagement-s.component';

describe('DemenagementSComponent', () => {
  let component: DemenagementSComponent;
  let fixture: ComponentFixture<DemenagementSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemenagementSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemenagementSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
