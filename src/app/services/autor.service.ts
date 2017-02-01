import { Autor } from './../model/autor'; 
import { Injectable } from '@angular/core'; 

@Injectable()
export class AutorService{

    autores: Autor[] = [];

    consultarAutor(){}

    consultarAutorPorId(){}

}