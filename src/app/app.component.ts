import { Component,Inject } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    app-simple-form {
      margin-bottom:10px;
    }
  `]
})
export class AppComponent {

  constructor(@Inject('mail') private mail){}

  onUpdate(id, text){
    this.mail.update(id,text);
  }

}
