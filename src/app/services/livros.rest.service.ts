import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Livro } from './../model/livro';

//imports do rxjs
import 'rxjs/add/operator/map';


@Injectable()
export class LivrosRESTService{

    constructor(private _Http: Http){
    }

    consultarTodos() {
        return this._Http.get('http://localhost:3000/livros')
                  .map( res => res.json() );
    }

    consultarPorId(id: number) {
        return this._Http.get(`http://localhost:3000/livros/${id}`)
                  .map( res => res.json() );
    }

    inserirLivro(livro: Livro) {
        let bodyString   = JSON.stringify( livro );
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        let options       = new RequestOptions({ headers: headers });
        return this._Http.put('http://localhost:3000/livros', livro, options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    }











/*
    // Update a comment
    updateComment (body: Object): Observable<Comment[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   

    // Delete a comment
    removeComment (id:string): Observable<Comment[]> {
        return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   
*/   

}