import { Component, OnInit } from '@angular/core';
import { LivroService } from './../../services/livro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  titulo = "Cadastro de Livros";
  livros;

  constructor(lService: LivroService) {
    this.livros = lService.consultarTodos();
  }

}
