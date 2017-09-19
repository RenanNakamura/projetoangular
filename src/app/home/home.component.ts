import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = [{name: "Clientes", url: "clientes"}, {name: "Forma de pagamentos", url: "formapagamento"}];
  constructor(private router:Router) {}

  ngOnInit() {
  }

  irPara(item){    
    this.router.navigate([item.url]);     
  }
}
