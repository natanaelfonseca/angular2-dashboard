import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LivroService } from './../../services/livro.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  livros;
  titulo: string = "Dashboard";

  constructor( lService: LivroService ){
    this.livros = lService.consultarTodos();
  }
  
}
