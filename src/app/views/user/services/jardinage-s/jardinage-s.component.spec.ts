import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JardinageSComponent } from './jardinage-s.component';

describe('JardinageSComponent', () => {
  let component: JardinageSComponent;
  let fixture: ComponentFixture<JardinageSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JardinageSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JardinageSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
