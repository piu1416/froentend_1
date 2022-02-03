import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  username:any;
  constructor(private router: Router,public service:UserService) {}

  ngOnInit(): void {
    this.service.loggedIn;
    this.username=localStorage.getItem('emailID');
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  onLogout() {
    this.service.logout();
    console.log('User has been logged Out!')
    this.ngOnInit();
    this.router.navigateByUrl('/home');
    Swal.fire({  
      icon: 'success',  
      title: 'Thanks for visiting E-Bills!',  
      text:'You have been Successfully Logged Out.',  
      timer: 3500, 
      footer: ''  
    }) 
  }

}
