import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { BillModel } from 'src/app/shared/bill.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminbill',
  templateUrl: './adminbill.component.html',
  styleUrls: ['./adminbill.component.scss']
})
export class AdminbillComponent implements OnInit {

  bills!:[BillModel];
  p: Number = 1;
  count: Number = 3;

  constructor(private service:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getAllBillDetails();
    console.log(this.bills);
  }

  getAllBillDetails(){
    this.service.getAllBills()
    .subscribe(res=>{
      this.bills = res;
    })
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  deleteBill(id:any){
    Swal.fire({  
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this bill!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, delete it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) {
        this.service.deleteBill(id)
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
          'Bill Details are safe :)',  
          'error'  
        )  
      }  
    })
      this.router.navigateByUrl('/admin-bills');
  }
  update(){
    this.router.navigateByUrl('/updatePaymentStatus');
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }
}
