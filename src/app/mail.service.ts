import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    `You're now friends with Raka`,
    `Raka liked your tweet`,
    `You'll never believe what Raka said...`
  ];

  constructor() { }

}
