import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { throwError } from 'rxjs';
import { Account } from 'src/app/model/model.account';
import { ErrorInfo } from 'src/app/model/model.errorinfo';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  accountList: Account[] = [];
  errInfo = new ErrorInfo();

  listAccountForm = new FormGroup({
  });

  constructor(
    // private router: Router,
    private apiService: ApiService,
    private chRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadAccount();
  }

  loadAccount() {
    this.apiService.getAccount().subscribe({
      next: (data: any) => {
        this.errInfo.processCustomError(data.errinfo);
        if (this.errInfo.status_code == 200) {
          this.accountList = data.account;

          $("#table-accountList").DataTable().destroy();
          this.chRef.detectChanges();
          $("#table-accountList").DataTable({
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

}
