import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private fb:FormBuilder,private http:HttpClient) { }
  readonly BaseURI = 'https://localhost:44313/api/Admin/';

  getAdmin(adminId:any){
    return this.http.get(this.BaseURI + 'ViewAdmin/'+adminId)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  getAllCustomers(){
    return this.http.get<any>(this.BaseURI + 'GetAllCustomers')
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getAllBills(){
    return this.http.get(this.BaseURI + 'GetAllBills')
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getAllPayments(){
    return this.http.get(this.BaseURI + 'GetAllPayments')
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getCustomerById(customerId:any){
    return this.http.get(this.BaseURI + 'GetCustomerById/'+customerId)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getBillById(billId:any){
    return this.http.get(this.BaseURI + 'GetBillById/'+billId)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getPaymentById(paymentId: any){
    return this.http.get(this.BaseURI + 'GetPaymentById/'+paymentId)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getBillsByCustomerId(customerId:any){
    return this.http.get(this.BaseURI + 'GetBillsByCustomerId/'+customerId)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getPaymentsByCustomerId(customerId:any){
    return this.http.get(this.BaseURI + 'GetPaymentsByCustomerId/'+customerId)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  addCustomer(formData: any){
    console.log(formData);
    return this.http.post(this.BaseURI + 'AddCustomer', formData)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  addBill(formData: any){
    console.log(formData);
    return this.http.post(this.BaseURI + 'CreateBill', formData)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  updateProfile(formData: any){
    console.log(formData);
     return this.http.put(this.BaseURI + 'UpdateProfile', formData)
     .pipe(map((res:any)=>{
      return res;
    }));
  }
  changePassword(formData: any){
    console.log(formData);
     return this.http.put(this.BaseURI + 'ChangePassword', formData)
     .pipe(map((res:any)=>{
      return res;
    }));
  }
  updateProfileForCustomer(formData: any){
    console.log(formData);
    return this.http.put(this.BaseURI + 'UpdateProfileForCustomer', formData)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  updatePaymentInBill(formData: any){
    console.log(formData);
    return this.http.put(this.BaseURI + 'UpdatePaymentStatus', formData)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  deleteCustomer(customerId: any){
    return this.http.delete(this.BaseURI + 'DeleteCustomer/'+customerId)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  deleteBill(billId: any){
    return this.http.delete(this.BaseURI + 'DeleteBill/'+billId)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  deletePayment(paymentId: any){
    return this.http.delete(this.BaseURI + 'DeletePayment/'+paymentId)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
}
