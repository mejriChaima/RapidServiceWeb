import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursPSComponent } from './cours-ps.component';

describe('CoursPSComponent', () => {
  let component: CoursPSComponent;
  let fixture: ComponentFixture<CoursPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
