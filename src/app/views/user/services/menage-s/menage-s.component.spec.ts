import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenageSComponent } from './menage-s.component';

describe('MenageSComponent', () => {
  let component: MenageSComponent;
  let fixture: ComponentFixture<MenageSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenageSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenageSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
