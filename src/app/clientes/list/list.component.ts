import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cliente-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() clientes = [];
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  onEdit(contato) {
    this.edit.emit(contato);
  }

  onRemove(contato) {
    this.remove.emit(contato);
  }
 
}
