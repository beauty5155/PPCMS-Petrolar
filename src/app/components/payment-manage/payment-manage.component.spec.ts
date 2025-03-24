import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentManageComponent } from './payment-manage.component';

describe('PaymentManageComponent', () => {
  let component: PaymentManageComponent;
  let fixture: ComponentFixture<PaymentManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentManageComponent]
    });
    fixture = TestBed.createComponent(PaymentManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
