import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AideadomicileComponent } from './aideadomicile.component';

describe('AideadomicileComponent', () => {
  let component: AideadomicileComponent;
  let fixture: ComponentFixture<AideadomicileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AideadomicileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AideadomicileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
