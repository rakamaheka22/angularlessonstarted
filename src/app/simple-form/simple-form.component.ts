import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  //with global css
  // encapsulation: ViewEncapsulation.None,
  //no global css
  // encapsulation: ViewEncapsulation.Native,
  selector: 'app-simple-form',
  template: `
      <input 
      #myInput 
      type="text" 
      [(ngModel)]="message"
      [ngClass]="{mousedown:isMousedown}"
      (mousedown)="isMousedown = true"
      (mouseup)="isMousedown = false"
      (mouseleave)="isMousedown = false">
      <button 
      class="white  bg-black code"
      (click)="update.emit({text:message})">Click me!</button>
  `,
  styles: [`
  :host {
    display:flex;
    flex-direction: column;
  }

  .mousedown {
    border:2px solid green;
  }

  input:focus {
    font-weight:bold;
    outline:none;
  }

  button {
    border:none;
  }
  `]
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  @Output() update = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

}
