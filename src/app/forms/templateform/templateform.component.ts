import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  fName="Dummy name"


  addHobby = function(hf){
    console.log("Hobby captured!" + hf)
    console.log(hf)
  }

  constructor() { }

  ngOnInit() {
  }

}
