import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  suma!: number;

  nombreInvalido: boolean = false;
  emailInvalido: boolean = false;
  mensajeInvalido: boolean = false;
  sumaInvalido: boolean = false;

  num1: number;
  num2: number;

  constructor(private datosService: ServicioService) {
    this.num1 = this.getRandomNumber();
    this.num2 = this.getRandomNumber();
  }

  submitForm() {
    this.nombreInvalido = this.nombre === undefined || this.nombre.trim() === '';
    this.emailInvalido = this.email === undefined || !this.isValidEmail(this.email);
    this.mensajeInvalido = this.mensaje === undefined || this.mensaje.trim() === '';
    this.sumaInvalido = this.suma !== (this.num1 + this.num2);

    if (!this.nombreInvalido && !this.emailInvalido && !this.mensajeInvalido && !this.sumaInvalido) {
      const datos = {
        nombre: this.nombre,
        email: this.email,
        mensaje: this.mensaje
      };
      this.datosService.guardarDatos(datos);
      this.resetForm();
    }
  }

  resetForm() {
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
    this.suma = undefined!;
    this.nombreInvalido = false;
    this.emailInvalido = false;
    this.mensajeInvalido = false;
    this.sumaInvalido = false;
    this.num1 = this.getRandomNumber();
    this.num2 = this.getRandomNumber();
  }

  isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
}
