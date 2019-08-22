import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/model/message';
import { MessageServiceService } from 'src/app/message/message-service.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages: Message[] = [];

  constructor(private msgServ: MessageServiceService) { }

  loadAll(){
    this.messages = this.msgServ.retrieveAllMessages();
  }

  ngOnInit() {
    this.loadAll()
  }

}
