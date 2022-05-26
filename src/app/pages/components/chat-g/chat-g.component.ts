import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service'

@Component({
  selector: 'app-chat-g',
  templateUrl: './chat-g.component.html',
  styleUrls: ['./chat-g.component.css']
})
export class ChatGComponent implements OnInit {
  text="";
  constructor(public chat:ChatService) { }

  ngOnInit(): void {
  }
  sendMessage(){
    let messageInfo = {
      text: this.text,
      messageType: 1
    };
    this.chat.sendMessage(messageInfo);
    this.text = "";
  }

}

