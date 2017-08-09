import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id:0,text:`You're now friends with Raka`},
    {id:1,text:`Raka liked your tweet`},
    {id:2,text:`You'll never believe what Raka said...`}
  ];

  update(id, text){
    this.messages = this.messages.map(m => 
    m.id === id ? {id,text} : m)
  }

  constructor() { }

}
