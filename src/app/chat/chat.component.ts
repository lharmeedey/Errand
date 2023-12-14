import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  user1Messages: string[] = [];
  user2Messages: string[] = [];
  newMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    // Initialize messages or load from a service
  }

  sendMessage(user: number) {
    if (this.newMessage.trim() !== '') {
      if (user === 1) {
        this.user1Messages.push(this.newMessage);
      } else if (user === 2) {
        this.user2Messages.push(this.newMessage);
      }
      this.newMessage = '';
    }
  }
}
