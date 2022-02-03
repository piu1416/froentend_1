import { AdminService } from './../../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  sweetMessage: string="";
  id!:number;
  user={
    id: 0,
    role:'CUSTOMER',
    name:'',
    email:'',
    contanctNo:''
  };
  constructor(public dialogRef: MatDialogRef<EditCustomerComponent>,private service:AdminService,private router:Router) { }

  ngOnInit(): void {
    var id=localStorage.getItem('CustomerU');
    if(id!=null){
      this.id=parseInt(id);
    }
  }
  onSubmit(form: NgForm){
    this.user.id=this.id;
    console.log(this.user)
    this.dialogRef.close();
    this.service.updateProfileForCustomer(this.user).subscribe(
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
          form.reset();
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
        localStorage.removeItem('CustomerU');
      },
      err => {
          console.log(err);
      }
    );
  }

}
