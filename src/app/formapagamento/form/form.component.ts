import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'formapagamento-edit',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() formaPagamento = {};
  @Output() clear = new EventEmitter();
  @Output() save = new EventEmitter();

  onClear() {
    this.clear.emit();
  }

  onSave() {
    this.save.emit(this.formaPagamento);
  }

}
