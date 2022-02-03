import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,public service:UserService,public router:Router ) { }

  isLoggedIn:boolean=false;
  openSignupForm() {
    this.dialog.open(SignupComponent, {width: 'auto', height: 'auto'});
  }
  openLoginForm() {
    const dialogRef = this.dialog.open(LoginComponent, {width: 'auto', height: 'auto'
    });
    this.service.loggedIn=false;
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('The dialog was closed');
    });
  }
  ngOnInit(): void {
    this.isLoggedIn=this.service.isLoggedIn();
    console.log(this.service.loggedIn);
  }
  openDashboard() {
    if(localStorage.getItem('role')=="ADMIN"){
      this.router.navigateByUrl('/admin-profile');
    }else{
      this.router.navigateByUrl('/customer-profile');
    }
  }

}
