import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserService } from './services/user.service';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FeatureComponent } from './feature/feature.component';
import { AdminService } from './services/admin.service';
import { CustomerService } from './services/customer.service';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './dashboard/customerdashboard/customerdashboard.component';
import { AdminprofileComponent } from './dashboard/admindashboard/adminprofile/adminprofile.component';
import { AdmincustComponent } from './dashboard/admindashboard/admincust/admincust.component';
import { AdminbillComponent } from './dashboard/admindashboard/adminbill/adminbill.component';
import { AdminpayComponent } from './dashboard/admindashboard/adminpay/adminpay.component';
import { CustomerprofileComponent } from './dashboard/customerdashboard/customerprofile/customerprofile.component';
import { CustomerbillComponent } from './dashboard/customerdashboard/customerbill/customerbill.component';
import { CustomerpayComponent } from './dashboard/customerdashboard/customerpay/customerpay.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { CustomerSidenavComponent } from './dashboard/customer-sidenav/customer-sidenav.component';
import { AddBillComponent } from './dashboard/admindashboard/add-bill/add-bill.component';
import { UpdateProfileComponent } from './dashboard/update-profile/update-profile.component';
import { MakePaymentComponent } from './dashboard/customerdashboard/make-payment/make-payment.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UpdatePaymentsInBillComponent } from './update-payments-in-bill/update-payments-in-bill.component';
import { ChangePasswordCustomerComponent } from './change-password-customer/change-password-customer.component';
import { AddCustomerComponent } from './dashboard/admindashboard/add-customer/add-customer.component';
import { EditCustomerComponent } from './dashboard/admindashboard/edit-customer/edit-customer.component';
import { AlertmsgComponent } from './alertmsg/alertmsg.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    LoginComponent,
    TeamComponent,
    ContactComponent,
    FeatureComponent,
    ForgetPasswordComponent,
    AdmindashboardComponent,
    CustomerdashboardComponent,
    AdminprofileComponent,
    AdmincustComponent,
    AdminbillComponent,
    AdminpayComponent,
    CustomerprofileComponent,
    CustomerbillComponent,
    CustomerpayComponent,
    SidenavComponent,
    DashboardHeaderComponent,
    CustomerSidenavComponent,
    AddBillComponent,
    UpdateProfileComponent,
    MakePaymentComponent,
    ChangePasswordComponent,
    UpdatePaymentsInBillComponent,
    ChangePasswordCustomerComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    AlertmsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxPaginationModule,
    ToastrModule.forRoot(
      {
        progressBar:true
      }
    )
  ],
  entryComponents: [
    SignupComponent, LoginComponent
],
  providers: [UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AdminService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
