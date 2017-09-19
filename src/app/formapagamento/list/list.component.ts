import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'formapagamento-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  @Input() formaPagamentos = [];
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  onEdit(formaPagamento) {
    this.edit.emit(formaPagamento);
  }

  onRemove(formaPagamento) {
    this.remove.emit(formaPagamento);
  }

}
