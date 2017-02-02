import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LivroService } from './../../services/livro.service';
import { Livro } from './../../model/livro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  //Dados da tabela
  livros;

  cadastroGroup = new FormGroup( {
    id: new FormControl(),
    nome: new FormControl(),
    url: new FormControl(),
   } );

  constructor(private lService: LivroService) {
    this.livros = lService.consultarTodos();
  }

  exibirDados(){
    this.cadastroGroup.valueChanges.subscribe( ( data ) => {
      console.log( data );
    } );
  }

  onSubmit() {

    let novoLivro = new Livro(
       this.cadastroGroup.get('id').value,
       this.cadastroGroup.get('nome').value,
       this.cadastroGroup.get('url').value
    );

    this.lService.incluir( novoLivro );

  }

}
