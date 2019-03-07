import { Component, OnInit } from '@angular/core';
import { BankapiService } from 'src/app/bank-service/bankapi.service';

@Component({
  selector: 'cts-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  allCustomers:any

  doTransact = false

  transactCustomer={
    id:0,
    name:"",
    amount:"",
    status:true,
    image:"1.jpg"
  }
  
 
  constructor(private bankapi:BankapiService) { }

  ngOnInit() {
    this.bankapi.getCustomers().subscribe(cust => this.allCustomers = cust)
  }

  addCustomer = function(customer){
    console.log(customer)
    customer.status=true
    customer.image="1.jpg"
    console.log(customer)
    this.bankapi.saveCustomer(customer).subscribe((c) => {
      console.log(c)
      this.bankapi.getCustomers().subscribe(cust => this.allCustomers = cust)
    })
  }

  deleteCustomer = function(delId){
    console.log("Deleting: " + delId)
    this.bankapi.deleteCustomer(delId).subscribe(dc => {
      console.log("Deleted: " )
      console.log(dc)
      this.bankapi.getCustomers().subscribe(cust => this.allCustomers = cust)
    })
  }

  showTransact = function(id){
    this.doTransact = true
    this.bankapi.getCustomerById(id).subscribe(c => {
      this.transactCustomer = c
      console.log("Customer Info for transaction")
      console.log(this.transactCustomer)
    })
  }

  customerTransactionDone = function(e){
    this.doTransact = !this.doTransact
    this.bankapi.updateCustomerById(e).subscribe(c => {
      this.bankapi.getCustomers().subscribe(cust => this.allCustomers = cust)
    })
  }


}
