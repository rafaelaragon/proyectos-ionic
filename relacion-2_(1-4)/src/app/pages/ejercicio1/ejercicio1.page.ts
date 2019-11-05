import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.page.html',
  styleUrls: ['./ejercicio1.page.scss'],
})
export class Ejercicio1Page implements OnInit {
  
  min : number = 0;
  max : number = 10;
  aleatorio : number = 0;
  numClicks: number = 0;

  constructor() { }

  ngOnInit() {
  }

  aleatoriza() {
    this.aleatorio = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }

    alterna() {
      if (this.numClicks % 2 == 0) {
        this.aleatorio = this.min;
      } else {
        this.aleatorio = this.max;
      }
      this.numClicks++;
    }

}
