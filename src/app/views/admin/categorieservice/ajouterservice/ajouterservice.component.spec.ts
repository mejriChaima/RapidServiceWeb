import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterserviceComponent } from './ajouterservice.component';

describe('AjouterserviceComponent', () => {
  let component: AjouterserviceComponent;
  let fixture: ComponentFixture<AjouterserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
