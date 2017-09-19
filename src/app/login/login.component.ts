import { LoginService } from './login.service';
import { Login } from './login.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {username: "Admin", senha: "123"};

  constructor(private loginService: LoginService, private router:Router) {
  }

  ngOnInit() {
  }

  logar(){
    this.loginService.logar(this.login.username, this.login.senha) ? this.router.navigate([this.loginService.url]) : window.alert('usuario não cadastrado'); 
  }

}
