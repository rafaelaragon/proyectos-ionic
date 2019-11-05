import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.page.html',
  styleUrls: ['./ejercicio4.page.scss'],
})
export class Ejercicio4Page implements OnInit {

  item: Cart = {
    item: '',
    price: 0,
    quantity: 0,
    subtotal: 0
  };

  constructor(private service: CartServiceService) { }
  items;
  total;

  ngOnInit() {
    this.items = this.service.getItems();
    this.total = this.service.getTotal();
  }

  addItem() {
    this.service.addItem(this.item);
  }

}
