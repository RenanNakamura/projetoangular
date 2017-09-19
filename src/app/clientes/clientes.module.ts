import { ClientesService } from './clientes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { HttpModule } from "@angular/http";
import {AccordionModule, PanelModule, ButtonModule, InputTextModule, PanelMenuModule, MenuItem} from 'primeng/primeng';

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
    ClientesRoutingModule
  ],
  declarations: [ClientesComponent, ListComponent, EditComponent],
  providers: [ClientesService]
})
export class ClientesModule { }
