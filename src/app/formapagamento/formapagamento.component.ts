import { Component, OnInit } from '@angular/core';
import { FormapagamentoService } from './formapagamento.service';

@Component({
  selector: 'app-formapagamento',
  templateUrl: './formapagamento.component.html',
  styleUrls: ['./formapagamento.component.css']
})
export class FormapagamentoComponent implements OnInit {

  ngOnInit() {
  }

  formaPagamentos: any;
  editFormaPagamento = {};

  constructor(private formaPagamentoService: FormapagamentoService) {
    this.reload();
  }

  clear() {
    this.editFormaPagamento = {};
  }

  edit(formaPagamento) {
    this.editFormaPagamento = Object.assign({}, formaPagamento);
  }

  remove(formaPagamento) {
    this.formaPagamentoService.removeFormaPagamento(formaPagamento)
      .then(() => this.reload());    
  }

  save(formaPagamento) {
    console.log('save.formaPagamento->', formaPagamento);
    if (formaPagamento.id) {
      this.formaPagamentoService.updateFormaPagamento(formaPagamento)
        .then(() => this.reload());
    } else {
      this.formaPagamentoService.addFormaPagamento(formaPagamento)
        .then(() => this.reload());
    }
    this.clear();
  }

  private reload() {    
    return this.formaPagamentoService.getFormaPagamento()
      .then(formaPagamentos => {
        console.log('formaPagamentos->', formaPagamentos);
        this.formaPagamentos = formaPagamentos
      });
  }

}
