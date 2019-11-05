import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.page.html',
  styleUrls: ['./ejercicio2.page.scss'],
})
export class Ejercicio2Page implements OnInit {

  metros : number = 1;
  centimetros: number = 100;
  pulgadas: number = 39.37;

  constructor() { }

  ngOnInit() {
  }

  metrosCentimetros() {
    this.centimetros = this.metros * 100;
  }
  metrosPulgadas() {
    this.pulgadas = Math.round(this.metros * 39.3701 * 100) / 100;
  }
  centimetrosMetros() {
    this.metros = Math.round(this.centimetros / 100 * 100) / 100;
  }
  centimetrosPulgadas() {
    this.pulgadas = Math.round(this.centimetros * 39.3701) / 100;
  }
  pulgadasMetros() {
    this.metros = Math.round(this.pulgadas * 0.0254 * 100) / 100;
  }
  pulgadasCentimetros() {
    this.centimetros = Math.round(this.pulgadas * 2.54 * 100) / 100;
  }

}
