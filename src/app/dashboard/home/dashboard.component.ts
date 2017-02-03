import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LivrosRESTService } from './../../services/livros.rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  livros;
  titulo: string = "Dashboard";

  constructor( lService: LivrosRESTService ){

    lService.consultarTodos().subscribe(
      ( data ) => {
           console.log( data );
           this.livros = data;
       },
      ( erro ) => {console.log( "chama aqui...." + erro)}     //function erro
    );

  }
  
}
