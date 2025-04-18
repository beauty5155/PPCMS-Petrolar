import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerManageComponent } from './customer-manage.component';

describe('CustomerManageComponent', () => {
  let component: CustomerManageComponent;
  let fixture: ComponentFixture<CustomerManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerManageComponent]
    });
    fixture = TestBed.createComponent(CustomerManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
