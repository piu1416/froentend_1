import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';


@Component({
  selector: 'app-admincust',
  templateUrl: './admincust.component.html',
  styleUrls: ['./admincust.component.scss']
})
export class AdmincustComponent implements OnInit {

  customers:any;
  p: Number = 1;
  count: Number = 3;
  
  constructor(public dialog: MatDialog,private service:AdminService, private router:Router) { }

  ngOnInit(): void {
    this.getAllCustomerDetails();
  }
  getAllCustomerDetails(){
      this.service.getAllCustomers()
      .subscribe(res=>{
        this.customers = res;
      })
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  deleteCustomer(id:any){
    Swal.fire({  
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this customer!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, delete!',  
      cancelButtonText: 'No, keep'  
    }).then((result) => {  
      if (result.value) {
        this.service.deleteCustomer(id)
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
          'Customer Details are safe :)',  
          'error'  
        )  
      }  
    })
      this.router.navigateByUrl('/admin-customers');
  }
  update(){
    this.router.navigateByUrl('/admin-profile');
  }
  addCustomerForm() {
    const dialogRef = this.dialog.open(AddCustomerComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe(() => this.reloadCurrentRoute());
  }
  updateProfileForCustomer(id:number){
    localStorage.setItem("CustomerU",id.toString());
    const dialogRef = this.dialog.open(EditCustomerComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe(() => this.reloadCurrentRoute());
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }
    
}
