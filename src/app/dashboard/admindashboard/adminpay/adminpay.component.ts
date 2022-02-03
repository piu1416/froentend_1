import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminpay',
  templateUrl: './adminpay.component.html',
  styleUrls: ['./adminpay.component.scss']
})
export class AdminpayComponent implements OnInit {

  payments:any;
  p: Number = 1;
  count: Number = 3;
  
  constructor(private service:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getAllPaymentDetails();
  }

  getAllPaymentDetails(){
    this.service.getAllPayments()
    .subscribe(res=>{
      this.payments = res;
    })
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  deletePayment(id:any){
    Swal.fire({  
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this payment!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, delete it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) {  
        this.service.deletePayment(id)
        .subscribe(res=>{
          this.reloadCurrentRoute();
          Swal.fire(  
            'Deleted!',  
            res.message,  
            'success'  
          ) 
        }); 
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Cancelled',  
          'Payment Details are safe :)',  
          'error'  
        )  
      }  
    })
      this.router.navigateByUrl('/admin-payments');
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

}
