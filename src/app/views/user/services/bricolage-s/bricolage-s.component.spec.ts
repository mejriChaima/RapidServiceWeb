import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BricolageSComponent } from './bricolage-s.component';

describe('BricolageSComponent', () => {
  let component: BricolageSComponent;
  let fixture: ComponentFixture<BricolageSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BricolageSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BricolageSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
