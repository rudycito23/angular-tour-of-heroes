import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../services/message.service'; //  importing MessageService, a service for handling messages

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  //  constructor to inject MessageService into the component
  //  the messageService is public so it can be bound to the template
  //  Angular only binds to public component properties
  constructor(public messageService: MessageService) {}
}
