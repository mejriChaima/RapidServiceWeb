import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AideadomicileSComponent } from './aideadomicile-s.component';

describe('AideadomicileSComponent', () => {
  let component: AideadomicileSComponent;
  let fixture: ComponentFixture<AideadomicileSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AideadomicileSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AideadomicileSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
