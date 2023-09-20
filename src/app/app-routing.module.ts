import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RectificadoComponent } from './gestion-rectificados/rectificado/rectificado.component';

const routes: Routes = [
  { path: 'rectificado-component', component: RectificadoComponent },
  // { path: 'venta-component', component: RectificadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
