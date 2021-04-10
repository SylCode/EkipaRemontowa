import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizacjeComponent } from './realizacje.component';

describe('RealizacjeComponent', () => {
  let component: RealizacjeComponent;
  let fixture: ComponentFixture<RealizacjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizacjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizacjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
