import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  result: number = 0;
  decimal: boolean = false;
  decimals: number = 0;
  firstNumber: number = 0;
  operator: string = "";

  clickNumber(n: number) {
    if (this.decimal) {
      this.decimals++;
      this.result = this.result + n * Math.pow(10, -this.decimals);
    }
    else {
      this.result = this.result * 10 + n;
    }
  }

  clickOperator(o: string) {
    this.operator = o;
    this.firstNumber = this.result;
    this.result = 0;
  }

  calculate() {
    switch (this.operator) {
      case "+": {
        this.result = this.firstNumber + this.result;
        break;
      }
      case "-": {
        this.result = this.firstNumber - this.result;
        break;
      }
      case "*": {
        this.result = this.firstNumber * this.result;
        break;
      }
      case "/": {
        this.result = this.firstNumber / this.result;
        break;
      }
      case "%": {
        this.result = this.firstNumber / 100 * this.result;
        break;
      }

    }
  }

  reset() {
    this.result = 0;
    this.decimal = false;
    this.decimals = 0;
  }

  resetLast() {
    this.result = Math.floor(this.result / 10);
    this.decimal = false;
    this.decimals = 0;
  }

  setDecimal() {
    this.decimal = true;
  }

  plusMinus() {
    this.result = this.result * -1;
  }

}
