import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RozbiorFieldComponent } from './rozbior-field.component';

describe('RozbiorFieldComponent', () => {
  let component: RozbiorFieldComponent;
  let fixture: ComponentFixture<RozbiorFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RozbiorFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RozbiorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
