import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.page.html',
  styleUrls: ['./ejercicio3.page.scss'],
})
export class Ejercicio3Page implements OnInit {

  numero: number = 0;

  constructor() { }

  ngOnInit() {
  }

  suma(n : number) {
    this.numero += n;
  }

}
