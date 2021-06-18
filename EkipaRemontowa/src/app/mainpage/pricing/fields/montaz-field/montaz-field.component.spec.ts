import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontazFieldComponent } from './montaz-field.component';

describe('MontazFieldComponent', () => {
  let component: MontazFieldComponent;
  let fixture: ComponentFixture<MontazFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontazFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MontazFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
