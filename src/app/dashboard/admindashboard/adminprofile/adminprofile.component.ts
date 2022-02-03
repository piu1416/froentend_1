import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { adminDTO } from 'src/app/shared/adminDTO';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.scss']
})
export class AdminprofileComponent implements OnInit {
  
  user:adminDTO=new adminDTO();

  constructor(private service:AdminService) { }

  ngOnInit(): void {
    var id=localStorage.getItem('id');
    this.service.getAdmin(id).subscribe(
      (res: any) => {
        this.user=res;
        this.user.adminName=res.adminName;
      }
    );
    console.log(this.user);
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
