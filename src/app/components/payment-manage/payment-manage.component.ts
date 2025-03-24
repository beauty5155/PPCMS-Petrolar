import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AppConst } from 'src/app/model/model.appconst';
import { ErrorInfo } from 'src/app/model/model.errorinfo';
import { Payment } from 'src/app/model/model.payment';
import { RegCusContact } from 'src/app/model/model.regcuscontact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-payment-manage',
  templateUrl: './payment-manage.component.html',
  styleUrls: ['./payment-manage.component.css']
})
export class PaymentManageComponent {

  operation: string = 'Add';
  recIdStr: string = '';
  appconst = new AppConst();
  customerInfo = new RegCusContact();
  paymentList: Payment[] = [];
  cid: number = 0;
  pid: number = 0;
  paymentForm!: FormGroup;
  customerDetailsForm!: FormGroup;
  customerForm!: FormGroup;
  viewMode = false;
  errInfo = new ErrorInfo();
  currentUrl = this.router.url;
  showListStudent: boolean = true;
  showListStudentCompact: boolean = false;

  listPaymentForm = new FormGroup({
  });

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private chRef: ChangeDetectorRef,
    private activedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.customerDetailsForm = this.formBuilder.group({
      cid: [''],
      name: [''],
      phone: [''],
      address: [''],
      balance: [''],
      joining_date: [''],
      max_value: [''],
    });

    this.paymentForm = this.formBuilder.group({
      pid: [''],
      cid: [this.cid],
      date: ['', [Validators.required]],
      paid_amount: ['', [Validators.required]]
    });

    if (this.activedRoute.snapshot.paramMap.has('cid')) {
      this.cid = Number(this.activedRoute.snapshot.paramMap.get('cid')!);
      this.getCustomer(this.cid);
      if (this.cid != 0) {
        this.paymentForm.patchValue({
          cid: this.cid
        });
        // this.paymentForm.disable();
        this.loadPayment();
      }

    }

    if (!this.viewMode) {
      this.customerDetailsForm.disable();
    }

    this.loadPayment();
    this.getCustomer(this.cid);

    this.paymentForm.get('cid')?.disable();

  }

  get cfControl() {
    return this.customerForm.controls;
  }
  get pfControl() {
    return this.paymentForm.controls;
  }

  saveCustomer(operation: string) {
    console.log("heloo line 87");
    
    const customerData: any[] = [];
    customerData.push(this.customerForm.value);
    if (this.cid == 0) {
      this.apiService.addCustomer(customerData).subscribe({
        next: (data: any) => {
          this.errInfo.processCustomError(data.errinfo);
          if (this.errInfo.status_code == 200) {
            if (operation == 'save') {
              this.router.navigateByUrl('/dashboard/regcus');
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
    this.router.navigateByUrl('/dashboard/paymentAdd/' + this.cid);
    // this.paymentForm.clear()
  }

  loadPayment() {
    this.apiService.getPayment('PAYMENT_W_CID', this.cid).subscribe({
      next: (data: any) => {
        this.errInfo.processCustomError(data.errinfo);
        if (this.errInfo.status_code == 200) {
          this.paymentList = data.payment;

          $("#table-paymentList").DataTable().destroy();
          this.chRef.detectChanges();
          $("#table-paymentList").DataTable({
            "order": [],
            columnDefs: [
              { orderable: false, width: '10%', targets: 0 },
              // { orderable: false, width: '11%', targets: 4, className: 'text-center' }
            ],
          });
        }
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.log("Client error");
          }
          else {
            if (error.message.length > 0) {
              this.errInfo.showSystemError(error.message);
            }
            else {
              this.errInfo.processCustomError(error.error[0].errinfo);
            }
          }
        }
        return throwError(() => new Error(error));
      }
    });
  }

  getCustomer(cid: number) {
    // this.paymentForm.get('cid')?.disable();

    this.apiService.getCustomerforId(cid).subscribe({
      next: (data: any) => {
        console.log(data);

        this.errInfo.processCustomError(data.errinfo);
        if (this.errInfo.status_code == 200) {
          this.customerInfo = data.customer;
          this.customerDetailsForm.setValue({
            cid: this.cid,
            name: this.customerInfo.name,
            phone: this.customerInfo.phone,
            address: this.customerInfo.address,
            balance: this.customerInfo.balance,
            joining_date: this.customerInfo.joining_date,
            max_value: this.customerInfo.max_value
          });
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
    });
  }


  savePayment(operation: string) {
    // const paymentData: any[] = [];
    // paymentData.push(this.paymentForm.value);
    if (this.pid == 0) {
      this.apiService.addPayment(this.paymentForm.value).subscribe({
        next: (data: any) => {
          this.errInfo.processCustomError(data.errinfo);
          if (this.errInfo.status_code == 200) {
            if (operation == 'save') {
              // this.router.navigateByUrl('/dashboard/paymentAdd/'+ this.cid);
              this.getRoute(this.currentUrl);
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

  onClick(){
    console.log("Clicked");
    
  }

}
