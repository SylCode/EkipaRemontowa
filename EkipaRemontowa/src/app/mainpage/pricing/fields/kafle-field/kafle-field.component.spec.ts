import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KafleFieldComponent } from './kafle-field.component';

describe('KafleFieldComponent', () => {
  let component: KafleFieldComponent;
  let fixture: ComponentFixture<KafleFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KafleFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KafleFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
