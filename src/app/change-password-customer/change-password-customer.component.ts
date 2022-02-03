import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-change-password-customer',
  templateUrl: './change-password-customer.component.html',
  styleUrls: ['./change-password-customer.component.scss']
})
export class ChangePasswordCustomerComponent implements OnInit {

  sweetMessage: string="";
  change={
    email: '',
    oldPassword:'',
    newPassword:'',
    confirmPassword:''
  };
  constructor(private customerservice:CustomerService,private router:Router) { }

  ngOnInit(): void {
    var email=localStorage.getItem('emailID');
    if(email!=null){
      this.change.email=email;
    }
    
  }
  onSubmit(form: NgForm){
    console.log(this.change)
      this.customerservice.changePassword(this.change).subscribe(
        (res: any) => {
          if(res.result==true){
            this.sweetMessage=res.message;
            console.log(this.sweetMessage);
            Swal.fire({  
              icon: 'success',  
              title: 'Done :)',  
              text:this.sweetMessage,  
              timer: 4500, 
              footer: ''  
            })
            this.router.navigateByUrl('/customer-profile');
          }
          else{
            this.sweetMessage=res.message;
            console.log(this.sweetMessage);
            Swal.fire({  
              icon: 'error',  
              title: 'Sorry!',  
              text:this.sweetMessage,  
              timer: 4500, 
              footer: ''  
            })
          }
        },
        err => {
            console.log(err);
        }
      );
    
  }
    sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
