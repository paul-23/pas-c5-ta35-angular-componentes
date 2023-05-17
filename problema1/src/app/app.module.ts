import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { ClientesService } from './clientes.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent],
  exports: [
    AltaClienteComponent,
    AltaClienteComponent,
    ListadoClientesComponent
  ]
})
export class AppModule { }
