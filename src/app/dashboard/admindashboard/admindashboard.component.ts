import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {

  // cusformValue!: FormGroup;
  // customerData: any;
  // allBillData: any;
  // allPaymentData: any;
  // customerObj: CustomerModel = new CustomerModel();
  // showAdd!: boolean;
  // showUpdate!: boolean;
  // billformValue!: FormGroup;
  // billObj: BillModel= new BillModel();
  // oneCustomerdata: any;
  constructor() { }
  //private admin: AdminService, private formBuilder: FormBuilder
  ngOnInit(): void {
    // this.cusformValue = this.formBuilder.group({
    //   ElectricityBoardId: [''],
    //   CustomerType: [''],
    //   CustomerName: [''],
    //   CustomerEmail: [''],
    //   CustomerContanctNo: [''],
    //   CustomerAddress: [''],
    //   CustomerQuestion: [''],
    //   CustomerAnswer: [''],
    //   Password: [''],
    //   ConfirmPassword: ['']
    // });

    // this.billformValue= this.formBuilder.group({
    //   Units:[''],
    //   PaymentStatus:[''],
    //   CustomerId:['']
    // });

    // this.getAllCustomerDetails();
    // this.getAllBillsofCustomer();
    // this.getAllPayemntDetails();
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  // getValue() {
  //   return localStorage.getItem('currentUser');
  // }

  // getAllCustomerDetails(){
  //   this.admin.getAllCustomers()
  //   .subscribe(res=>{
  //     this.customerData = res.customers;
  //   })
  // }

  // getAllBillsofCustomer(){
  //   this.admin.getAllBills()
  //   .subscribe(res=>{
  //     this.allBillData = res.bills;
  //   })
  // }

  // getAllPayemntDetails(){
  //   this.admin.getAllPayments()
  //   .subscribe(res=>{
  //     this.allPaymentData =res.payments;
  //   })
  // }

  // // getCustomerByhisId(){
  // //   this.admin.getCustomerById(customerId)
  // //   .subscribe(res=>{
  // //     this.oneCustomerdata = res.customer;
  // //   })
  // // }

  // ClickAddCustomer(){
  //   this.cusformValue.reset();
  //   this.showAdd =true;
  //   this.showUpdate =false;
  // }
  // postCustomerDetails(){
  //   this.customerObj.electricityBoardId = this.cusformValue.value.ElectricityBoardId;
  //   this.customerObj.customerType = this.cusformValue.value.CustomerType;
  //   this.customerObj.customerName = this.cusformValue.value.CustomerName;
  //   this.customerObj.customerContanctNo = this.cusformValue.value.CustomerContanctNo;
  //   this.customerObj.customerEmail = this.cusformValue.value.CustomerEmail;
  //   this.customerObj.customerAddress = this.cusformValue.value.CustomerAddress;
  //   this.customerObj.customerQuestion = this.cusformValue.value.CustomerQuestion;
  //   this.customerObj.customerAnswer = this.cusformValue.value.CustomerAnswer;
  //   this.customerObj.password = this.cusformValue.value.Password;
  //   this.customerObj.confirmPassword = this.cusformValue.value.ConfirmPassword;
  //   this.admin.addCustomer(this.customerObj)
  //   .subscribe((res: any)=>{
  //     console.log(res);
  //     let ref = document.getElementById('close');
  //     ref?.click();
  //     this.getAllCustomerDetails();
  //   })
  // }

  // postBillDetails(){
  //   this.billObj.units = this.billformValue.value.Units;
  //   this.billObj.customerId = this.billformValue.value.CustomerId;
  //   this.admin.addBill(this.billObj)
  //   .subscribe((res: any)=>{
  //     console.log(res);
  //     let ref = document.getElementById('close');
  //     ref?.click();
  //     this.getAllBillsofCustomer();
  //   })
  // }

}
