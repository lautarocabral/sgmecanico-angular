import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RectificadoComponent } from './components/gestion-rectificados/rectificado/rectificado.component';
import { ModuloOperarioComponent } from './components/gestion-rectificados/modulo-operario/modulo-operario.component';
import { UpdateMotorComponent } from './components/gestion-rectificados/modulo-operario/update-motor/update-motor.component';
import { PedidoComponent } from './components/gestion-rectificados/pedido/pedido.component';
import { AltaPedidoComponent } from './components/gestion-rectificados/pedido/alta-pedido/alta-pedido.component';

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
