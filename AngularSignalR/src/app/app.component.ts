import { Component, OnInit } from '@angular/core';

import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string;

  ngOnInit() {
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl("https://localhost:44398/notify")
      .build();

    connection.start().then(function () {
      console.log('Połączenie nawiązane poprawnie');
    }).catch(function (err) {
      return console.error(err.toString());
    });

    connection.on("BroadcastMessage", (message: string) => {
      this.message = message;
    });
  }
}
