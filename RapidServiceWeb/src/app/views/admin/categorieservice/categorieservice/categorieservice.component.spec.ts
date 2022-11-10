import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieserviceComponent } from './categorieservice.component';

describe('CategorieserviceComponent', () => {
  let component: CategorieserviceComponent;
  let fixture: ComponentFixture<CategorieserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
