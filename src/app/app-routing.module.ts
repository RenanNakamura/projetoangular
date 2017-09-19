import { AutenticacaoGuardGuard } from './autenticacao-guard.guard';
import { ClientesComponent } from './clientes/clientes.component';
import { FormapagamentoComponent } from './formapagamento/formapagamento.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate:[AutenticacaoGuardGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(r: Router) {
    this.logaRotas("/", r.config);
  }

  logaRotas(pai: String, rotas: Routes) {
    for (let i = 0; i < rotas.length; i++) {
      console.log("path:", pai, rotas[i].path, rotas[i].component ? rotas[i].component : "-->" + rotas[i].redirectTo);
      if (rotas[i].children) {
        rotas[i].canActivate = [AutenticacaoGuardGuard];
        this.logaRotas(rotas[i].path + "/", rotas[i].children);
      }
    }

  }


}
