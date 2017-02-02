import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  dataAtual = Date.now();

  constructor(private _router:Router,
              private _loginService: LoginService){}

  tratarFormulario( dataForm ){

    let isLogged = this._loginService.logarUsuario( dataForm.user,
                                                   dataForm.password );

    if( isLogged ){
      this._router.navigate(['/main/home']);
    }else{
      alert("Dados de login incorretos.");
    }

  }

}
