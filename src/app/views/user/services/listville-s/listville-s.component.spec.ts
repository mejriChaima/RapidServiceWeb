import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvilleSComponent } from './listville-s.component';

describe('ListvilleSComponent', () => {
  let component: ListvilleSComponent;
  let fixture: ComponentFixture<ListvilleSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListvilleSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListvilleSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
