import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.page.html',
  styleUrls: ['./ejercicio3.page.scss'],
})
export class Ejercicio3Page implements OnInit {
  items;
  total;

  constructor(private service: CartServiceService) { }

  ngOnInit() {
    this.items = this.service.getItems();
    this.total = this.service.getTotal();
  }

}
