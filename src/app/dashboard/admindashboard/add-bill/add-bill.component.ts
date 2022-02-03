import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent implements OnInit {
  sweetMessage: string="";
  bill={
    customerId: 0,
    units:0
  };
  constructor(private service:AdminService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log(this.bill)
    this.service.addBill(this.bill).subscribe(
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
