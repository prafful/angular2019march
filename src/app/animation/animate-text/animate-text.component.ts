import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'cts-animate-text',
  templateUrl: './animate-text.component.html',
  styleUrls: ['./animate-text.component.css'],
  animations:[
              trigger('textAnimation', [
                state('small', style({
                  color:'red',
                  transform:'scale(2)'
                })),
                state('big',style({
                  color:'yellow',
                  transform:'scale(4)'
                })),
                transition('small <-> big', animate('2000ms ease-in'))
              ])
  ]
})
export class AnimateTextComponent implements OnInit {

  initialState= 'big'

  doAnimation = function(){
    this.initialState = this.initialState == 'big'?'small':'big'
  }

  constructor() { }

  ngOnInit() {
  }

}
