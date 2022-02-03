import { NgForm } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { CustomerService } from '../services/customer.service';
import { LoginModel } from '../shared/LoginModel';
import { SignupComponent } from '../signup/signup.component';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new LoginModel();
  sweetMessage: string="";
  constructor(public dialogRef: MatDialogRef<LoginComponent>,private service:UserService,
    private router: Router, private toastr: ToastrService,private adminService:AdminService,public dialog:MatDialog,private customerService:CustomerService) { }

  ngOnInit(): void{
    // if (localStorage.getItem('token') != null)
    //   this.router.navigateByUrl('');
  }

  onForget(){
    this.dialogRef.close();
    this.dialog.open(ForgetPasswordComponent, {width: 'auto', height: 'auto'});
  }
  onNewUser(){
    this.dialogRef.close();
    this.dialog.open(SignupComponent, {width: 'auto', height: 'auto'});

  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('id', res.id);
        localStorage.setItem('emailID', res.emailID);
        localStorage.setItem('role', res.role);
        this.service.loggedIn=true;
        console.log(res.token);
        console.log(res.id);
        console.log(res.emailID);
        console.log(res.role); 
        if(res.role=="ADMIN"){
          this.router.navigateByUrl('/admin-profile');
        }else{
          this.router.navigateByUrl('/customer-profile');
        }
        this.sweetMessage=res.message;
        console.log(this.sweetMessage);
        Swal.fire({  
          icon: 'success',  
          title: 'Welcome To E-Bill Solution',  
          text:this.sweetMessage,  
          timer: 3500, 
          footer: ''  
        }) 
        if(res.role=="ADMIN"){
          this.adminService.getAdmin(res.id).subscribe(
            (admin: any) => {
              localStorage.setItem('currentUser', admin);
            });
        }
        else{
          this.customerService.getCustomerById(res.id).subscribe(
            (cus: any) => {
              localStorage.setItem('currentUser', cus);
              console.log(cus);
            });
        }
      },
      err => {
        
        if (err.status == 400){
          Swal.fire({  
            icon: 'error',  
            title: 'Authentication Failed...',  
            text: 'Invalid Credentials! Please try to login again.',
            
            timer: 4500  
            // footer: '<a href>Why do I have this issue?</a>'  
          }) 
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        }
        else
          console.log(err);
      }
    );
  }
}
