import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AppConst } from 'src/app/model/model.appconst';
import { ErrorInfo } from 'src/app/model/model.errorinfo';
import { RegCusContact } from 'src/app/model/model.regcuscontact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  passwordeye: string = 'password';
  showPwdIcon: boolean = false;
  regCusContact = new RegCusContact();
  errInfo = new ErrorInfo();
  appconst = new AppConst();

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
    if(this.loginForm.value >= 0)
      this.userLogin();

  }

  get lfControl() {
    return this.loginForm.controls;
  }

  userLogin() {
    this.apiService.userLogin(this.loginForm.value).subscribe({
      next: (data: any) => {
        this.errInfo.processCustomError(data[0].errinfo);
        if (this.errInfo.status_code == 200) {
          this.regCusContact = data[0].rccd;
          this.router.navigateByUrl('/dashboard');
        }
        else
          this.router.navigateByUrl('');
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
    }
    );
  }

  showPassword() {
    if (this.passwordeye == 'password') {
      this.passwordeye = 'text';
      this.showPwdIcon = true;
    }
    else {
      this.passwordeye = 'password';
      this.showPwdIcon = false;
    }
  }


}
