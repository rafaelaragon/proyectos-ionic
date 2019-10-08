import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.page.html',
  styleUrls: ['./ejercicio4.page.scss'],
})
export class Ejercicio4Page implements OnInit {

  saludo: string = "";
  nombre:string = "Tragabuche";

  constructor() { }

  ngOnInit() {
  }

  saluda() {
    this.saludo = "Hola, " +this.nombre + ".";
  }

}
