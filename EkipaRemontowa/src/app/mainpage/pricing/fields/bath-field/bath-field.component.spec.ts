import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathFieldComponent } from './bath-field.component';

describe('BathFieldComponent', () => {
  let component: BathFieldComponent;
  let fixture: ComponentFixture<BathFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BathFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BathFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
