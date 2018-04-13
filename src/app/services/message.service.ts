import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {

  private subject = new Subject<any>();

  constructor() { }

  sendMessage(msg: any) {
    this.subject.next(msg);
  }

  /* sendMessage(msg: Message) {
    this.subject.next(msg);
  }

  sendStrMsg(msg: string) {
    this.subject.next(msg);
  }

  sendTupleMsg(msg: [string , any]) {
    this.subject.next(msg);
  }*/

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
