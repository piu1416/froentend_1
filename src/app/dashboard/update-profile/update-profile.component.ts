import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { UpdateProfileModel } from 'src/app/shared/updateProfile.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  sweetMessage: string="";
  user={
    id: 0,
    role:'',
    name:'',
    email:'',
    contanctNo:''
  };
  constructor(private service:AdminService,private router:Router) { }

  ngOnInit(): void {
    var id=localStorage.getItem('id');
    var role=localStorage.getItem('role');
    if(id!=null){
      this.user.id=parseInt(id) ;
    }
    if(role!=null){
      this.user.role=role;
    }
    console.log(id,role);
    
  }
  onSubmit(form: NgForm){
    console.log(this.user)
    this.service.updateProfile(this.user).subscribe(
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
        this.router.navigateByUrl('/admin-profile');
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
