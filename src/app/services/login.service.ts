import { Injectable } from '@angular/core'; 

@Injectable()
export class LoginService{

    logarUsuario( user, password ): boolean {

        if( user == 'natanael.vaz@gmail.com' && password == '123456' ){
            sessionStorage.setItem("logado", "true" );
            return true;
        }else{
            sessionStorage.setItem("logado", "false" );
            return false;
        }

    }

}