import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AdminService } from '../services/admin.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  sweetMessage: string="";
  change={
    email: '',
    oldPassword:'',
    newPassword:'',
    confirmPassword:''
  };
  constructor(private adminservice:AdminService,private customerservice:CustomerService) { }

  ngOnInit(): void {
    var email=localStorage.getItem('emailID');
    if(email!=null){
      this.change.email=email;
    }
    
  }
  onSubmit(form: NgForm){
    console.log(this.change)
      this.adminservice.changePassword(this.change).subscribe(
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
