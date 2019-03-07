import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  myName = "Prafful Daga"

  receivedUpdatedName = function(e){
    console.log("Back to Parent: ")
    console.log(e)
    this.myName = e

  }

  constructor() { }

  ngOnInit() {
  }

}
