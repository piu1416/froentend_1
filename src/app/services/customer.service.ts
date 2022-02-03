import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private fb:FormBuilder,private http:HttpClient) { }
  readonly BaseURI = 'https://localhost:44313/api/Customer/';

  getCustomerById(customerId:any){
    return this.http.get(this.BaseURI + 'ViewCustomer/'+customerId)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  getBillsByCustomerId(customerId:any){
    return this.http.get(this.BaseURI + 'GetAllBillsCustomer/'+customerId)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  getBillById(billId:any){
    return this.http.get(this.BaseURI + 'GetBillById/'+billId)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  
  getPaymentsByCustomerId(customerId:any){
    return this.http.get(this.BaseURI + 'GetPaymentByCustomerId/'+customerId)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  makePayment(formData:any){
    return this.http.post(this.BaseURI + 'MakePayment',formData)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  changePassword(formData:any){
    return this.http.put(this.BaseURI + 'ChangePassword',formData)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  updateCustomerProfile(formData:any){
    return this.http.put(this.BaseURI + 'UpdateCustomerProfile',formData)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
}
