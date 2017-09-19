import { LoginService } from './login.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {AccordionModule, PanelModule, ButtonModule, InputTextModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,    
    AccordionModule,
    PanelModule,
    ButtonModule,
    InputTextModule,        
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
