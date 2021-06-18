import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodlogiFieldComponent } from './podlogi-field.component';

describe('PodlogiFieldComponent', () => {
  let component: PodlogiFieldComponent;
  let fixture: ComponentFixture<PodlogiFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodlogiFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodlogiFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
