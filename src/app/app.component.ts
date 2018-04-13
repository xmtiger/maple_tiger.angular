import { Component } from '@angular/core';

import { Subscription } from 'rxjs/subscription';

import { MessageService } from './services/message.service';
import { Message } from './services/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subscription: Subscription;
  messages: any[] = [];

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.saveMessages(message);
    });
  }

  sendMessage(): void {
    const msg1 = new Message('msg1', {});
    this.messageService.sendMessage(msg1);
    this.messageService.sendMessage(new Message('msg2', 76));

    this.messageService.sendMessage('message1 from app.component');
    this.messageService.sendMessage('message2 from app.component');

    this.messageService.sendMessage(['Tuple Msg1', 99]);
    this.messageService.sendMessage(['Tuple msg2', new Message('tuple msg', 88)]);

    this.messageService.sendMessage(77);
  }

  clearMessage(): void {
    this.messageService.clearMessage();
  }

  saveMessages(msg: any) {
    if (msg instanceof Message) {
      if (msg.msg === 'msg1') {
        this.messages.push(msg);
      }
    }
    /*if (msg instanceof Object) {
      this.messages.push(msg);
    }*/
    /* if (typeof msg === 'string') {
      this.messages.push(msg);
    }*/
    /*if ( msg instanceof Object === false) {
      this.messages.push(msg);
    }*/
  }
}
