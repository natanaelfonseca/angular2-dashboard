import { Livro } from './../model/livro';
import { livros } from './../db/db';
import { Injectable } from '@angular/core';

@Injectable()
export class LivroService{

    private _livros: Livro[] = [];

    constructor(){
        this._livros = livros;
    }

    consultarTodos(){
        console.log('Testando debug....');
        return this._livros;
    }

}