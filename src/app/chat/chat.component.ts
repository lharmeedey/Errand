import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
 messages: string[] = [];
  newMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    // Initialize messages or load from a service
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }
  
}
