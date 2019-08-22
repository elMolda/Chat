import { Injectable } from '@angular/core';
import { Message } from '../model/message';


@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  
  messageDB = [
    new Message('David','Alejandro','Hola!'),
    new Message('Alejandro','David','Qué tal'),
    new Message('David','Alejandro','Muy bien'),
  ]

  constructor() { }

  createMessage(newMsg: Message){
    this.messageDB.push(newMsg);
  }

  retrieveAllMessages(){
    return this.messageDB;
  }
}
