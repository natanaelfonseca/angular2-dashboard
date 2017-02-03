import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './../../services/websocket.service';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css']
})
export class WebsocketComponent {

  respostaWs;

  constructor(private wsService: WebSocketService){
     wsService.criarObservable().subscribe(
       ( data ) => {
         this.respostaWs = data;
       }
     );
  }

  tratarFormulario( form ){
    this.wsService.enviarMsg( form.msg );
  }

}
