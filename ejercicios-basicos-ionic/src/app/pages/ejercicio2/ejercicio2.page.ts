import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.page.html',
  styleUrls: ['./ejercicio2.page.scss'],
})
export class Ejercicio2Page implements OnInit {

  nombre: string = "";
  mensaje: string = "Muestra mi nombre";

  constructor() { }

  ngOnInit() {
  }

  alternaNombre() {
    if (this.mensaje == "Muestra mi nombre") {
      this.nombre = "Rafael Aragón Rodríguez";
      this.mensaje = "Oculta mi nombre";
    } else {
      this.nombre = "";
      this.mensaje = "Muestra mi nombre";
    }
  }

}
