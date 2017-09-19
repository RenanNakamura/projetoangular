import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  url = 'home';
  loginsCadastrados = [{username: "Admin", senha: "123"}, {username: "nakamura", senha: "123"}];
  estaLogado = false;
  
  constructor() { }

  logar(aUserName, aSenha: String){
    let efetuarLogin = false;
    this.loginsCadastrados.map((data) => {
        if(data.username === aUserName && data.senha === aSenha){        
            efetuarLogin = true;                        
        };
    }); 
    this.estaLogado = efetuarLogin;
    return this.estaLogado;   
  }


}
