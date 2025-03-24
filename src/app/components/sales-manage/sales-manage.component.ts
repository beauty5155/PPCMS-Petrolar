import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AppConst } from 'src/app/model/model.appconst';
import { ErrorInfo } from 'src/app/model/model.errorinfo';
import { Sales } from 'src/app/model/model.sales';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sales-manage',
  templateUrl: './sales-manage.component.html',
  styleUrls: ['./sales-manage.component.css']
})
export class SalesManageComponent {


  operation: string = 'Make Bills.';
  recIdStr: string = '';
  appconst = new AppConst();
  sales = new Sales();
  bill_no: number = 0;
  salesForm!: FormGroup;
  errInfo = new ErrorInfo();
  currentUrl = this.router.url;

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.salesForm = this.formBuilder.group({
      cid: ['', [Validators.required]],
      bill_no: [''],
      date: ['', [Validators.required]],
      rate: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      total_amount: ['', [Validators.required]],
      paid_amount: ['', [Validators.required]],
      balance_amount: ['', [Validators.required]]
    });

  }

  get cfControl() {
    return this.salesForm.controls;
  }

  saveSales(operation: string) {
    // const salesData: any[] = [];
    // salesData.push(this.salesForm.value);
    if (this.bill_no == 0) {
      this.apiService.addSales(this.salesForm.value).subscribe({
        next: (data: any) => {
          this.errInfo.processCustomError(data.errinfo);
          if (this.errInfo.status_code == 200) {
            if (operation == 'save') {
              this.router.navigateByUrl('/dashboard/sales');
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
    this.router.navigateByUrl('/dashboard/sales');
  }


}
