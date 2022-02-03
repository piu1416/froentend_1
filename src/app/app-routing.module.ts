import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordCustomerComponent } from './change-password-customer/change-password-customer.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddBillComponent } from './dashboard/admindashboard/add-bill/add-bill.component';
import { AdminbillComponent } from './dashboard/admindashboard/adminbill/adminbill.component';
import { AdmincustComponent } from './dashboard/admindashboard/admincust/admincust.component';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { AdminpayComponent } from './dashboard/admindashboard/adminpay/adminpay.component';
import { AdminprofileComponent } from './dashboard/admindashboard/adminprofile/adminprofile.component';
import { CustomerbillComponent } from './dashboard/customerdashboard/customerbill/customerbill.component';
import { CustomerdashboardComponent } from './dashboard/customerdashboard/customerdashboard.component';
import { CustomerpayComponent } from './dashboard/customerdashboard/customerpay/customerpay.component';
import { CustomerprofileComponent } from './dashboard/customerdashboard/customerprofile/customerprofile.component';
import { MakePaymentComponent } from './dashboard/customerdashboard/make-payment/make-payment.component';
import { UpdateProfileComponent } from './dashboard/update-profile/update-profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdatePaymentsInBillComponent } from './update-payments-in-bill/update-payments-in-bill.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'register', component: SignupComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'customerdashboard', component: CustomerdashboardComponent  },
  {path: 'admin-profile',component:AdminprofileComponent},
  {path: 'admin-customers',component:AdmincustComponent},
  {path: 'admin-bills',component:AdminbillComponent},
  {path: 'admin-payments',component:AdminpayComponent},
  {path: 'customer-profile',component:CustomerprofileComponent},
  {path: 'customer-bills',component:CustomerbillComponent},
  {path: 'customer-payments',component:CustomerpayComponent},
  {path: 'addBill',component:AddBillComponent},
  {path: 'updateProfile',component:UpdateProfileComponent},
  {path: 'makePayment',component:MakePaymentComponent},
  {path: 'changePassword',component:ChangePasswordComponent},
  {path: 'changePasswordCustomer',component:ChangePasswordCustomerComponent},
  {path: 'updatePaymentStatus',component:UpdatePaymentsInBillComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
