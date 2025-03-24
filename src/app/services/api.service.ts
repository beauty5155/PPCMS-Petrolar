import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  // ---------------------- xxxx APIs starts ----------------------------------
// apiUrl = 'https://jsonplaceholder.typicode.com'

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
  }
// ---------------------- xxxx APIs ends ------------------------------------

  addCustomer(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/customer`, post);
  }

  getCustomer(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/customer`);
  }
// ---------------------- xxxx APIs ends ------------------------------------

  getAccount(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/account`);
  }
  addAccount(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/account`, post);
  }
// ---------------------- xxxx APIs ends ------------------------------------

  getPayment(flag:string, cid:number): Observable<any[]> {
    let httpParams = new HttpParams();

    // if (flag == 'PAYMENT_ALL') {
    //   httpParams = httpParams.set('flag', flag);   
    // }
    if (flag == 'PAYMENT_W_CID') {
      httpParams = httpParams.set('flag', flag);
      httpParams = httpParams.set('cid', cid.toString());
    }
    
    const parameter = {
      params: httpParams
    }

    return this.http.get<any[]>(`${this.apiUrl}/payment`, parameter);
  }
  addPayment(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/payment`, post);
  }
// ---------------------- xxxx APIs ends ------------------------------------

  getStock(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/stock`);
  }
  addStock(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/stock`, post);
  }
// ---------------------- xxxx APIs ends ------------------------------------

// ---------------------- xxxx APIs starts ----------------------------------
  getSales(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/sales`);
  }
  addSales(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sales`, post);
  }
// ---------------------- xxxx APIs ends ------------------------------------

  getCustomerforId(cid: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/customer/${cid}`);
  }
  // ---------------------- xxxx APIs starts ----------------------------------
  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts/${id}`);
  }
  // ---------------------- xxxx APIs ends ------------------------------------

  // ---------------------- xxxx APIs starts ----------------------------------
  addPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/posts`, post);
  }
  // ---------------------- xxxx APIs ends ------------------------------------

  // ---------------------- Login APIs starts ---------------------------------
  userLogin(data: any): Observable<any> {
    // return this.http.post<any>(`${this.apiUrl}/userlogin`, data, httpOptions);
    return this.http.post<any>(`${this.apiUrl}/userlogin`, data, httpOptions);
  }
  // ---------------------- Login APIs ends -----------------------------------

  // ---------------------- xxxx APIs starts ----------------------------------
  updatePost(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/posts/${id}`, post);
  }
  // ---------------------- xxxx APIs ends ------------------------------------

  // ---------------------- xxxx APIs starts ----------------------------------
  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/posts/${id}`);
  }
  // ---------------------- xxxx APIs ends ------------------------------------

}
