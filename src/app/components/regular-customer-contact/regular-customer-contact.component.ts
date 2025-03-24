import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegCusContact } from '../../model/model.regcuscontact';
import { ErrorInfo } from '../../model/model.errorinfo';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-regular-customer-contact',
  templateUrl: './regular-customer-contact.component.html',
  styleUrls: ['./regular-customer-contact.component.css']
})
export class RegularCustomerContactComponent {

  regCusContactList: RegCusContact[] = [];
  errInfo = new ErrorInfo();

  listRegularCustomerForm = new FormGroup({
  });

  constructor(
    private apiService: ApiService,
    private chRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadRegCus();
  }

  loadRegCus() {
    this.apiService.getCustomer().subscribe({
      next: (data: any) => {
        console.log(data);
        // this.errInfo.processCustomError(data[0].errinfo); // -->>>>>>>>> if array list is used in backend
        this.errInfo.processCustomError(data.errinfo);
        if (this.errInfo.status_code == 200) {
          // this.regCusContactList = data[0].contact;
          this.regCusContactList = data.contact;

          $("#table-regCusContactList").DataTable().destroy();
          this.chRef.detectChanges();
          $("#table-regCusContactList").DataTable({
            "order": [],
            columnDefs: [
              { orderable: false, width: '1%', targets: 0 },
              { orderable: false, width: '11%', targets: 4, className: 'text-center' }
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
