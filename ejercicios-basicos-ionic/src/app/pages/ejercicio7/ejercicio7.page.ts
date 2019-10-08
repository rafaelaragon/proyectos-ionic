import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.page.html',
  styleUrls: ['./ejercicio7.page.scss'],
})
export class Ejercicio7Page implements OnInit {

  euros : number = 1;
  pesetas : number = 166.386;

  constructor() { }

  ngOnInit() {
  }

  actualizaEuros() {
    this.euros = Math.round(this.pesetas / 166.386 * 100) / 100;
  }

  actualizaPesetas() {
    this.pesetas = Math.round(this.euros * 166.386);
  }

}
