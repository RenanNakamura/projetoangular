import { NgModule } from '@angular/core';
import { FormapagamentoService } from './formapagamento.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { FormapagamentoRoutingModule } from './formapagamento-routing.module';
import {AccordionModule, PanelModule, ButtonModule, InputTextModule, PanelMenuModule, MenuItem} from 'primeng/primeng';
import { FormapagamentoComponent } from './formapagamento.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule, 
    PanelMenuModule,   
    AccordionModule,
    PanelModule,
    ButtonModule,
    InputTextModule,                    
    FormapagamentoRoutingModule
  ],
  declarations: [FormapagamentoComponent, ListComponent, FormComponent],
  providers: [FormapagamentoService]
})
export class FormapagamentoModule { }
