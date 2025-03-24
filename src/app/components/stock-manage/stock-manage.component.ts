import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AppConst } from 'src/app/model/model.appconst';
import { ErrorInfo } from 'src/app/model/model.errorinfo';
import { Stock } from 'src/app/model/model.stock';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent {


  operation: string = 'Add';
  recIdStr: string = '';
  appconst = new AppConst();
  customer = new Stock();
  order_id: number = 0;
  stockForm!: FormGroup;
  errInfo = new ErrorInfo();
  currentUrl = this.router.url;

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.stockForm = this.formBuilder.group({
      order_id: [''],
      date: ['', [Validators.required]],
      m_reading: ['', [Validators.required]],
      e_reading: ['', [Validators.required]],
      purchase_qty: ['', [Validators.required]],
      remaining_qty: ['', [Validators.required]]
    });

  }

  get cfControl() {
    return this.stockForm.controls;
  }

  saveStock(operation: string) {
    // const stockData: any[] = [];
    // stockData.push(this.stockForm.value);
    if (this.order_id == 0) {
      this.apiService.addStock(this.stockForm.value).subscribe({
        next: (data: any) => {
          this.errInfo.processCustomError(data.errinfo);
          if (this.errInfo.status_code == 200) {
            if (operation == 'save') {
              this.router.navigateByUrl('/dashboard/stock');
            } else {
              this.getRoute(this.currentUrl);
            }
          }
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.error instanceof ErrorEvent) {
              console.log("Client error");
            }
            else {
              if (error.message.length > 0) {
                this.errInfo.showSystemError(error.message)
              }
              else {
                this.errInfo.processCustomError(error.error[0].errinfo);
              }
            }
          }
          return throwError(() => new Error(error));
        }
      })
    }
  }

  getRoute(currentUrl: string) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  processCancel() {
    this.router.navigateByUrl('/dashboard/stock');
  }


}
