import { AutenticacaoGuardGuard } from './autenticacao-guard.guard';
import { ClientesModule } from './clientes/clientes.module';
import { FormapagamentoModule } from './formapagamento/formapagamento.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule, PanelModule, ButtonModule, InputTextModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    InputTextModule,    
    LoginModule,
    HomeModule,
    ClientesModule,
    FormapagamentoModule,
    AppRoutingModule
  ],
  providers: [AutenticacaoGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
