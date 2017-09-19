import { ClientesService } from './clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  
  ngOnInit() {
  }

  clientes: any;
  editCliente = {};

  constructor(private clientesService: ClientesService) {
    this.reload();
  }

  clear() {
    this.editCliente = {};
  }

  edit(cliente) {
    this.editCliente = Object.assign({}, cliente);
  }

  remove(cliente) {
    this.clientesService.removeCliente(cliente)
      .then(() => this.reload());    
  }

  save(cliente) {
    console.log('cliente->',cliente);
    if (cliente.id) {
      this.clientesService.updateCliente(cliente)
        .then(() => this.reload());
    } else {
      this.clientesService.addCliente(cliente)
        .then(() => this.reload());
    }
    this.clear();
  }

  private reload() {    
    return this.clientesService.getClientes()
      .then(clientes => {
        console.log('clientes->', clientes);
        this.clientes = clientes
      });
  }

}
