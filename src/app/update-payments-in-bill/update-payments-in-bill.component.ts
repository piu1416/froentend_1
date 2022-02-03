import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-update-payments-in-bill',
  templateUrl: './update-payments-in-bill.component.html',
  styleUrls: ['./update-payments-in-bill.component.scss']
})
export class UpdatePaymentsInBillComponent implements OnInit {
  sweetMessage: string="";
  updateBill={
    paymentId: 0,
    billId: 0,
    paymentStatus:''
  };
  constructor(private service:AdminService,private router:Router) { }

  ngOnInit(): void {   
  }
  onSubmit(form: NgForm){
    console.log(this.updateBill)
    this.service.updatePaymentInBill(this.updateBill).subscribe(
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
        this.router.navigateByUrl('/admin-bills');
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
