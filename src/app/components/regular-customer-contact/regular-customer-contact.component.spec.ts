import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularCustomerContactComponent } from './regular-customer-contact.component';

describe('RegularCustomerContactComponent', () => {
  let component: RegularCustomerContactComponent;
  let fixture: ComponentFixture<RegularCustomerContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularCustomerContactComponent]
    });
    fixture = TestBed.createComponent(RegularCustomerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
