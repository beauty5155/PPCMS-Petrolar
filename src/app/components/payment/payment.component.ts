import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AppConst } from 'src/app/model/model.appconst';
import { ErrorInfo } from 'src/app/model/model.errorinfo';
import { Payment } from 'src/app/model/model.payment';
import { RegCusContact } from 'src/app/model/model.regcuscontact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  operation: string = 'Add';
  recIdStr: string = '';
  appconst = new AppConst();
  customer = new RegCusContact();

  customerList: RegCusContact[] = [];
  paymentList: Payment[] = [];

  cid: number = 0;
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
    private chRef: ChangeDetectorRef
    ) { }

  ngOnInit(): void {

    this.paymentForm = this.formBuilder.group({ 
      cid: ['', [Validators.required]],
      date: ['', [Validators.required]],
      paid_amount: ['', [Validators.required]]
    });


  // if (!this.viewMode) {
  //   this.customerDetailsForm.disable();
  
  // }

  // this.loadPayment();
  // if(this.cid > 0) {
  //   this.paymentForm.patchValue({
  //     cid: this.cid
  //   });
    // console.log(this.paymentForm.cid+"======cid");
    // this.getCustomer(this.cid);
    this.getCustomer();
  // }


  }

  onClick() {
    // if(this.cid > 0) {
    //   this.paymentForm.patchValue({
    //     cid: this.cid
    //   });
    // }
  }

  get cfControl() {
    return this.customerForm.controls;
  }

  saveCustomer(operation: string) {
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

  
  getCustomer() {
    this.apiService.getCustomer().subscribe({
      next: (data: any) => {
        console.log(data);
        
        this.errInfo.processCustomError(data.errinfo);
        if (this.errInfo.status_code == 200) {
          this.customerList = data.contact;

          // this.customerDetailsForm.setValue({
          //   cid: this.cid,
          //   name: this.customer.name,
          //   phone: this.customer.phone,
          //   address: this.customer.address,
          //   balance: this.customer.balance,
          //   joining_date: this.customer.joining_date,
          //   max_value: this.customer.max_value
          // });
        }

        this.customerDetailsForm
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

  onClickCustomerId() {
    this.router.navigateByUrl('/dashboard/paymentAdd/' + this.cid);
  }

  onCustomerIdSelected(evt: any) {
    let val = evt.target.value;

    if (val != '') {
      this.cid = val;
      // this.loadCustomerList();
    }

    // if(this.cid > 0 ) {
    //   this.paymentForm.patchValue({
    //     cid: this.cid
    //   });
      console.log(this.cid+"fghjkl")
    // }
  }

}
