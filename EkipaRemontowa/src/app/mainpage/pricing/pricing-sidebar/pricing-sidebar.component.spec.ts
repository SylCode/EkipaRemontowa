import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingSidebarComponent } from './pricing-sidebar.component';

describe('PricingSidebarComponent', () => {
  let component: PricingSidebarComponent;
  let fixture: ComponentFixture<PricingSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
