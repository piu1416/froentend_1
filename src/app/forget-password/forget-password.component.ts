import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog,MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  sweetMessage: string="";
  forget={
    role:'',
    email:'',
    answer:'',
    newPassword:'',
    confirmPassword:''
  };
  constructor(public dialogRef: MatDialogRef<ForgetPasswordComponent>,private service:UserService,
    private router: Router, private toastr: ToastrService,) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.service.forgetPassword(form.value).subscribe(
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
          this.dialogRef.close();
          this.router.navigateByUrl('/home');
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
}
