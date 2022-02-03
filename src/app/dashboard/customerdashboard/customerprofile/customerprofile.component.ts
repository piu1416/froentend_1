import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.scss']
})
export class CustomerprofileComponent implements OnInit {

  user:any;

  constructor(private service:CustomerService) { }

  ngOnInit(): void {
    var id=localStorage.getItem('id');
    this.user=this.service.getCustomerById(id).subscribe(
      (res: any) => {
        this.user=res;
      }
    );
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
