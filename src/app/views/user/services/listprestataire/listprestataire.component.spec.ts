import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprestataireComponent } from './listprestataire.component';

describe('ListprestataireComponent', () => {
  let component: ListprestataireComponent;
  let fixture: ComponentFixture<ListprestataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListprestataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListprestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
