import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManageComponent } from './stock-manage.component';

describe('StockManageComponent', () => {
  let component: StockManageComponent;
  let fixture: ComponentFixture<StockManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockManageComponent]
    });
    fixture = TestBed.createComponent(StockManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
