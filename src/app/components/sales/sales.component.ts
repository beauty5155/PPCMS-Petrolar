import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { throwError } from 'rxjs';
import { ErrorInfo } from 'src/app/model/model.errorinfo';
import { Sales } from 'src/app/model/model.sales';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {

  salesList: Sales[] = [];
  errInfo = new ErrorInfo();

  listSalesForm = new FormGroup({
  });

  constructor(
    // private router: Router,
    private apiService: ApiService,
    private chRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales() {
    this.apiService.getSales().subscribe({
      next: (data: any) => {
        this.errInfo.processCustomError(data.errinfo);
        if (this.errInfo.status_code == 200) {
          this.salesList = data.sales;

          $("#table-salesList").DataTable().destroy();
          this.chRef.detectChanges();
          $("#table-salesList").DataTable({
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
