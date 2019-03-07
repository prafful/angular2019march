import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cts-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() sendName

  @Output() sendNameToParent = new EventEmitter()

  updateName = function(e){
    console.log("*******************************************************")
    console.log(e)
    console.log("*******************************************************")
    console.log(this.sendName)
    this.sendNameToParent.emit(this.sendName)
  }

  constructor() { }

  ngOnInit() {
  }

}
