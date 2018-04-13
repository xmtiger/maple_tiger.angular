import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import {MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  hero = 'wisdom';
  message: any;
  messages: any[] = [];
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    // subscribe to messageService
    this.subscription = this.messageService.getMessage().subscribe(message => {
      // this.message = message;
      // this.messages.push(message);
      this.printMessages(message);
    });
   }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.messages = [];
  }

  printMessages(message: any) {
    this.message = message;
    this.messages.push(message);
  }

}
