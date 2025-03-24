import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Account } from 'src/app/model/model.account';
import { AppConst } from 'src/app/model/model.appconst';
import { ErrorInfo } from 'src/app/model/model.errorinfo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-account-manage',
  templateUrl: './account-manage.component.html',
  styleUrls: ['./account-manage.component.css']
})
export class AccountManageComponent {


  operation: string = 'Add';
  recIdStr: string = '';
  appconst = new AppConst();
  account = new Account();
  aid: number = 0;
  accountForm!: FormGroup;
  errInfo = new ErrorInfo();
  currentUrl = this.router.url;

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      aid: [''],
      date: ['', [Validators.required]],
      b_qty: ['', [Validators.required, Validators.maxLength(this.appconst.str_len_11), Validators.pattern(this.appconst.b_qty_pattern)]],
      b_rate: ['', [Validators.required, Validators.maxLength(this.appconst.str_len_11), Validators.pattern(this.appconst.b_rate_pattern)]],
      b_total: [''],
      s_qty: ['', [Validators.required]],
      s_rate: ['', [Validators.required, Validators.maxLength(this.appconst.str_len_11), Validators.pattern(this.appconst.s_rate_pattern)]],
      s_total: [''],
      r_qty: [''],
      profit: ['']
    });

  }

  get cfControl() {
    return this.accountForm.controls;
  }

  saveAccount(operation: string) {
    // const accountData: any[] = [];
    // accountData.push(this.accountForm.value);
    if (this.aid == 0) {
      this.apiService.addAccount(this.accountForm.value).subscribe({
        next: (data: any) => {
          console.log(data);
          
          this.errInfo.processCustomError(data.errinfo);
          if (this.errInfo.status_code == 200) {
            if (operation == 'save') {
              this.router.navigateByUrl('/dashboard/account');
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
    this.router.navigateByUrl('/dashboard/account');
  }


}
