import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor() {
    this.grupos = [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      },
    ];
    this.clientes = [];
  }

  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  nuevoCliente(): Cliente {
    return {
      nombre: '',
      cif: '',
      direccion: '',
      grupo: 1
    };
  }
}
