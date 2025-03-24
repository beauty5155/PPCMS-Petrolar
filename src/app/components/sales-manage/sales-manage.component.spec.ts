import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManageComponent } from './sales-manage.component';

describe('SalesManageComponent', () => {
  let component: SalesManageComponent;
  let fixture: ComponentFixture<SalesManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesManageComponent]
    });
    fixture = TestBed.createComponent(SalesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
