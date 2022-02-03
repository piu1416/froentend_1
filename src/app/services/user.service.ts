import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, 
        Validators} from '@angular/forms';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private fb:FormBuilder,private http:HttpClient) { }
  readonly BaseURI = 'https://localhost:44313/api';
  public loggedIn : boolean=false;

  register(formData: any) {
    return this.http.post(this.BaseURI + '/AccountLogIn/CustomerRegistration', formData)
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  login(formData: any) {
    console.log(formData);
    return this.http.post(this.BaseURI + '/AccountLogIn/Login', formData)
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  forgetPassword(formData: any) {
    return this.http.put(this.BaseURI + '/AccountLogIn/ForgetPassword', formData)
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('emailID');
    localStorage.removeItem('role');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('customers');
    localStorage.removeItem('bills');
    localStorage.removeItem('payments');
    
    this.loggedIn = false;
    //this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    if(localStorage.getItem('token')==null){
      this.loggedIn=false;
    }
    else{
      this.loggedIn=true;
    }
    return this.loggedIn;
  }
}
