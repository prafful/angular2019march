import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  helloFromGuest = function(){
    console.log("hello from random guest")
  }

}
