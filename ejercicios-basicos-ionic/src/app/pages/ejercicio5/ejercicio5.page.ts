import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.page.html',
  styleUrls: ['./ejercicio5.page.scss'],
})
export class Ejercicio5Page implements OnInit {

  min : number = 0;
  max : number = 10;
  aleatorio : number = 0;

  constructor() { }

  ngOnInit() {
  }

  aleatoriza() {
    this.aleatorio = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }

}
