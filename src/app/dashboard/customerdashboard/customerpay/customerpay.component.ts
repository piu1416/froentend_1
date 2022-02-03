import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerpay',
  templateUrl: './customerpay.component.html',
  styleUrls: ['./customerpay.component.scss']
})
export class CustomerpayComponent implements OnInit {

  payments:any;
  p: Number = 1;
  count: Number = 3;
  
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.getAllPaymentDetails();
  }

  getAllPaymentDetails(){
    var id=localStorage.getItem('id');
    this.service.getPaymentsByCustomerId(id)
    .subscribe(res=>{
      this.payments = res;
    })
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
