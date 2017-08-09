import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
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
      <button (click)="update.emit({text:message})">Click me!</button>
  `,
  styles: [`
  :host {
    display:flex;
    flex-direction: column;
  }

  *{
    font-family:Segoe UI;
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
