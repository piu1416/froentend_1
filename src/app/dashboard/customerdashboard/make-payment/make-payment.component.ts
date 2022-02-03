import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss']
})
export class MakePaymentComponent implements OnInit {
  sweetMessage: string="";
  payment={
    billId: 0,
    customerId:0,
    paymentMethod:''
  };
  constructor(private service:CustomerService,private router:Router) { }

  ngOnInit(): void {
    var id=localStorage.getItem('id');
    if(id!=null){
      this.payment.customerId=parseInt(id) ;
    }
    console.log(id);
  }
  onSubmit(form: NgForm){
    console.log(this.payment)
    this.service.makePayment(this.payment).subscribe(
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
          this.router.navigateByUrl('/customer-payments');
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
