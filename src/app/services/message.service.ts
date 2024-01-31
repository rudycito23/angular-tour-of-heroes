//  the Injectable decorator is used to define a service that can be injected into components
import { Injectable } from '@angular/core';

//  marks this class as a service that can be provided and injected as a dependency
@Injectable({
  providedIn: 'root', //  specifies that this service should be provided in the root injector, makes it available throughout the app
})
export class MessageService {
  messages: string[] = [];  //  property to store an array of messages; initialized as an empty array

  //  method to add a message to the messages array; it takes a string as an argument
  add(message: string) {
    this.messages.push(message);  //  adds the new message to the end of the messages array
  }

  //  method to clear all messages from the messages array
  clear() {
    this.messages = []; // restes the messages array to an empty array
  }
}
