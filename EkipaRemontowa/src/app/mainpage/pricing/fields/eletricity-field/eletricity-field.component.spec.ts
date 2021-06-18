import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletricityFieldComponent } from './eletricity-field.component';

describe('EletricityFieldComponent', () => {
  let component: EletricityFieldComponent;
  let fixture: ComponentFixture<EletricityFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EletricityFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EletricityFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
