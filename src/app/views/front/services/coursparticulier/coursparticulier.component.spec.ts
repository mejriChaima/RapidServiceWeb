import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursparticulierComponent } from './coursparticulier.component';

describe('CoursparticulierComponent', () => {
  let component: CoursparticulierComponent;
  let fixture: ComponentFixture<CoursparticulierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursparticulierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursparticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
