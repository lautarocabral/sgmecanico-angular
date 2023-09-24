import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RectificadoComponent } from './gestion-rectificados/rectificado/rectificado.component';
import { ModuloOperarioComponent } from './gestion-rectificados/modulo-operario/modulo-operario.component';
import { UpdateMotorComponent } from './gestion-rectificados/modulo-operario/update-motor/update-motor.component';
import { PedidoComponent } from './gestion-rectificados/pedido/pedido.component';
import { AltaPedidoComponent } from './gestion-rectificados/pedido/alta-pedido/alta-pedido.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RectificadoComponent,
    ModuloOperarioComponent,
    UpdateMotorComponent,
    PedidoComponent,
    AltaPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
