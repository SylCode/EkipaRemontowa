import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalowanieFieldComponent } from './malowanie-field.component';

describe('MalowanieFieldComponent', () => {
  let component: MalowanieFieldComponent;
  let fixture: ComponentFixture<MalowanieFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalowanieFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalowanieFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
