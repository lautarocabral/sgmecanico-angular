import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RectificadoComponent } from './gestion-rectificados/rectificado/rectificado.component';
import { ModuloOperarioComponent } from './gestion-rectificados/modulo-operario/modulo-operario.component';
import { UpdateMotorComponent } from './gestion-rectificados/modulo-operario/update-motor/update-motor.component';
import { PedidoComponent } from './gestion-rectificados/pedido/pedido.component';
import { AltaPedidoComponent } from './gestion-rectificados/pedido/alta-pedido/alta-pedido.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/rectificados',
    pathMatch: 'full'
  },
  { path: 'rectificados', component: RectificadoComponent },
  {
    path: 'moduloOperarios', component: ModuloOperarioComponent, children: [
      
    ]
  },
  { path: 'updateMotor', component: UpdateMotorComponent },
  { path: 'pedidos', component: PedidoComponent },
  { path: 'alta-pedido', component: AltaPedidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
