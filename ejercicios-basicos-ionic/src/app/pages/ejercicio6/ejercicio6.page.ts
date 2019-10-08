import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio6',
  templateUrl: './ejercicio6.page.html',
  styleUrls: ['./ejercicio6.page.scss'],
})
export class Ejercicio6Page implements OnInit {

  mensaje : string = "";
  posicion : number = 1;

  constructor() { }

  ngOnInit() {
  }

  avanza() {
    this.posicion += 1;
  }

}
