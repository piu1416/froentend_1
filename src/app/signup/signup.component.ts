import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog,MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { RegistrationModel } from '../shared/RegistrationModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  customerForm:FormGroup|any;
  customer={
    customerType:"",
    electricityBoardId:0,
    customerName:"",
    customerEmail:"",
    customerContanctNo:"",
    customerAddress:"",
    customerQuestion:"",
    customerAnswer:"",
    password:"",
    confirmPassword:""
   }
  sweetMessage: string="";
  @ViewChild('signupForm') customerFormDirective: any;
  customerFormErrors : any = {
      'customerType': '',
      'electricityBoardId': 0,
      'customerName': '',
      'customerEmail': '',
      'customerContanctNo': '',
      'customerAddress': '',
      'customerQuestion': '',
      'customerAnswer': '',
      'password': '',
      'confirmPassword': ''
  }

  constructor(public dialogRef: MatDialogRef<SignupComponent>,private service:UserService,
    private router: Router, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.customerForm = this.fb.group({
      customerType : [' ',Validators.required],
      customerEmail : ['',Validators.required,Validators.email],
      customerName : ['',Validators.required,Validators.minLength(3)],
      electricityBoardId : [0,Validators.required,,Validators.min(0)],
      customerQuestion : ['',Validators.required],
      customerAnswer : ['',Validators.required,Validators.minLength(3)],
      customerContanctNo : ['',Validators.required,
                              Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')],
      customerAddress : ['',Validators.required,Validators.minLength(10)],
        password : ['',[Validators.required,Validators.minLength(5)]],
        confirmPassword : ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.customer=this.customerForm.value;
    this.service.register(this.customer).subscribe(
      (res: any) =>{
        if(res.result==true){
          this.sweetMessage=res.message;
          console.log(this.sweetMessage);
          Swal.fire({  
            icon: 'success',  
            title: this.sweetMessage,  
            text:'Login to Get Started :)',  
            timer: 4500, 
            footer: ''  
          })
          this.customerForm.reset();
          this.dialogRef.close();
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
}
