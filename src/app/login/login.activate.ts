import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoginCanActivate implements CanActivate{

    constructor(private _router: Router){
    }

    canActivate(){

        let logado = sessionStorage.getItem("logado") || false;

        if( logado ){
            return true;
        }else{
            this._router.navigate(['/login']);
            return false;
        }

    };

}