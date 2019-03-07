import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'cts-transact',
  templateUrl: './transact.component.html',
  styleUrls: ['./transact.component.css']
})
export class TransactComponent implements OnInit {

  @Input() transactCustomer

  @Output() customerTransactionUpdateDone = new EventEmitter()

  ttCredit = ""

  ttDebit = ""

  transactAmount = 0

  constructor( ) { }

  ngOnInit() {
  }

  doTransaction = function(tc){
    console.log(tc)
    if(this.ttCredit === "credit"){
      console.log("this.transactCustomer.amount: " + this.transactCustomer.amount)
      console.log("tc.transactAmount: " + this.transactAmount)
      tc.amount = parseInt(this.transactCustomer.amount) + parseInt(this.transactAmount)
      this.ttCredit = ""
    }
    if(this.ttDebit === "debit"){
      console.log("this.transactCustomer.amount: " + this.transactCustomer.amount)
      console.log("tc.transactAmount: " + this.transactAmount)
      tc.amount = parseInt(this.transactCustomer.amount) - parseInt(this.transactAmount)
      this.ttDebit = ""
    }
    console.log("Transaction Done")
    console.log(tc)
    //this.transactCustomer.name = tc.name
    this.transactCustomer.amount = tc.amount
    console.log("Post Transaction Customer Updated")
    console.log(this.transactCustomer)
    this.customerTransactionUpdateDone.emit(this.transactCustomer)
    this.transactCustomer = {}
  }



}
