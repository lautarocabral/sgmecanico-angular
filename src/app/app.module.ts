import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ModuloOperarioComponent } from './components/gestion-rectificados/modulo-operario/modulo-operario.component';
import { RectificadoComponent } from './components/gestion-rectificados/rectificado/rectificado.component';
import { UpdateMotorComponent } from './components/gestion-rectificados/modulo-operario/update-motor/update-motor.component';
import { PedidoComponent } from './components/gestion-rectificados/pedido/pedido.component';
import { AltaPedidoComponent } from './components/gestion-rectificados/pedido/alta-pedido/alta-pedido.component';
import { ApiService } from './services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
