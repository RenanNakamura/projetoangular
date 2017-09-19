import { ClientesModule } from './../clientes/clientes.module';
import { FormapagamentoModule } from './../formapagamento/formapagamento.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {AccordionModule, PanelModule, ButtonModule, InputTextModule, PanelMenuModule, MenuItem} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,    
    FormsModule, 
    PanelMenuModule,   
    AccordionModule,
    PanelModule,
    ButtonModule,
    InputTextModule,            
    ClientesModule,
    FormapagamentoModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
