import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-visualizar-contacto',
  templateUrl: './visualizar-contacto.component.html',
  styleUrls: ['./visualizar-contacto.component.css']
})
export class VisualizarContactoComponent implements OnInit {
  datos: any;

  constructor(private datosService: ServicioService) { }

  ngOnInit() {
    this.datosService.obtenerDatos().subscribe(nuevosDatos => {
      this.datos = nuevosDatos;
    });
  }
}
