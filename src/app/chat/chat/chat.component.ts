import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/model/message';
import { MessageServiceService } from 'src/app/message/message-service.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  msg: Message = new Message('', '', '');

  constructor(private msgServ: MessageServiceService) { }
  
  sendMesssage(){
    this.msgServ.createMessage(this.msg);
  }

  ngOnInit() {
  }

}
