import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = [{name: "Clientes", url: "home/clientes"}, {name: "Forma pagamentos", url: "home/formapagamento"}];
  constructor(private router:Router) {}

  ngOnInit() {
  }

  irPara(item){    
    this.router.navigate([item.url]);     
  }
}
