import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { BillModel } from 'src/app/shared/bill.model';

@Component({
  selector: 'app-customerbill',
  templateUrl: './customerbill.component.html',
  styleUrls: ['./customerbill.component.scss']
})
export class CustomerbillComponent implements OnInit {

  bills!:[BillModel];
  p: Number = 1;
  count: Number = 3;

  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    this.getAllBillDetails();
    console.log(this.bills);
  }

  getAllBillDetails(){
    var id=localStorage.getItem('id');
    this.service.getBillsByCustomerId(id)
    .subscribe(res=>{
      this.bills = res;
    })
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
