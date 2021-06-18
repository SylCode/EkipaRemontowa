import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GkFieldComponent } from './gk-field.component';

describe('GkFieldComponent', () => {
  let component: GkFieldComponent;
  let fixture: ComponentFixture<GkFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GkFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GkFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
