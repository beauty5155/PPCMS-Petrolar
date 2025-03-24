import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { throwError } from 'rxjs';
import { ErrorInfo } from 'src/app/model/model.errorinfo';
import { Stock } from 'src/app/model/model.stock';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  stockList: Stock[] = [];
  errInfo = new ErrorInfo();

  listStockForm = new FormGroup({
  });

  constructor(
    // private router: Router,
    private apiService: ApiService,
    private chRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadStock();
  }

  loadStock() {
    this.apiService.getStock().subscribe({
      next: (data: any) => {
        this.errInfo.processCustomError(data.errinfo);
        if (this.errInfo.status_code == 200) {
          this.stockList = data.stock;

          $("#table-stockList").DataTable().destroy();
          this.chRef.detectChanges();
          $("#table-stockList").DataTable({
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
