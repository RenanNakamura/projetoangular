import { FormapagamentoComponent } from './../formapagamento/formapagamento.component';
import { AutenticacaoGuardGuard } from './../autenticacao-guard.guard';
import { ClientesComponent } from './../clientes/clientes.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children:[
      { path: 'clientes', component: ClientesComponent, canActivate:[AutenticacaoGuardGuard] },
      { path: 'formapagamento', component: FormapagamentoComponent, canActivate:[AutenticacaoGuardGuard] }    
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
