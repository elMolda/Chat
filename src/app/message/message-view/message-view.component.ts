import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/model/message';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.css']
})
export class MessageViewComponent implements OnInit {

  @Input()
  msg: Message;
  constructor() { }
  

  ngOnInit() {
  }

}
