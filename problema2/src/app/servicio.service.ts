import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Formulario } from './formulario.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private formulario: Formulario = new Formulario('','','');
  private datosActualizados = new BehaviorSubject<Formulario>(this.formulario);

  public contactData$ = this.datosActualizados.asObservable();

  guardarDatos(formulario: Formulario) {
    this.formulario = formulario;
    this.datosActualizados.next(this.formulario);
  }

  obtenerDatos() {
    return this.datosActualizados.asObservable();
  }
}
