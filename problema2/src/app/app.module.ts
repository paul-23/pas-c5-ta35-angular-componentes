import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { VisualizarContactoComponent } from './visualizar-contacto/visualizar-contacto.component';
import { ServicioService } from './servicio.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormularioContactoComponent,
    VisualizarContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
