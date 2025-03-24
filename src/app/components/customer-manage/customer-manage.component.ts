import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AppConst } from 'src/app/model/model.appconst';
import { ErrorInfo } from 'src/app/model/model.errorinfo';
import { RegCusContact } from 'src/app/model/model.regcuscontact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customer-manage',
  templateUrl: './customer-manage.component.html',
  styleUrls: ['./customer-manage.component.css']
})
export class CustomerManageComponent {

  operation: string = 'Add';
  recIdStr: string = '';
  appconst = new AppConst();
  customer = new RegCusContact(); // not needed in all add form check and remove it
  cid: number = 0;
  customerForm!: FormGroup;
  errInfo = new ErrorInfo();
  currentUrl = this.router.url;

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.customerForm = this.formBuilder.group({
      cid: [0],
      name: ['', [Validators.required, Validators.maxLength(this.appconst.str_len_100), Validators.pattern(this.appconst.name_pattern)]],
      password: ['', [Validators.required, Validators.minLength(this.appconst.str_len_8),Validators.maxLength(this.appconst.str_len_12), Validators.pattern(this.appconst.password_pattern)]],
      phone: ['', [Validators.required, Validators.maxLength(this.appconst.str_len_10), Validators.pattern(this.appconst.phone_pattern)]],
      address: ['', [Validators.required, Validators.maxLength(this.appconst.str_len_500)]],
      balance: ['', [Validators.required, Validators.maxLength(this.appconst.str_len_11), Validators.pattern(this.appconst.balance_pattern)]],
      max_value: ['', [Validators.required]]
    });

  }

  get cfControl() {
    return this.customerForm.controls;
  }

  saveCustomer(operation: string) {
    // const customerData: any[] = [];
    // customerData.push(this.customerForm.value);
    if (this.cid == 0) {
      this.apiService.addCustomer(this.customerForm.value).subscribe({
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
    this.router.navigateByUrl('/dashboard/regcus');
  }

}
