import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WebSocketService{

    ws: WebSocket;

   criarObservable() {

       this.ws = new WebSocket('ws://echo.websocket.org');

       let myObservable = new Observable(
           ( observer ) => { 
               this.ws.onmessage = ( event ) => { observer.next(event.data)};
               this.ws.onerror = ( error ) => { observer.error(error)};
               this.ws.onclose = ( event ) => { observer.complete()};
           }
       );

       return myObservable;
   }

   enviarMsg(msg: string){
       this.ws.send( msg );
   }

}