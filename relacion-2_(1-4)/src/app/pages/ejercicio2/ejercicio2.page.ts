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

  metrosA() {
    this.centimetros = this.metros * 100;
    this.pulgadas = Math.round(this.metros * 39.3701 * 100) / 100;
  }
  centimetrosA() {
    this.metros = Math.round(this.centimetros / 100 * 100) / 100;
    this.pulgadas = Math.round(this.centimetros * 39.3701) / 100;
  }
  pulgadasA() {
    this.metros = Math.round(this.pulgadas * 0.0254 * 100) / 100;
    this.centimetros = Math.round(this.pulgadas * 2.54 * 100) / 100;
  }

}
