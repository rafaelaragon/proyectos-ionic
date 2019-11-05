import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private items: Cart[];
  total: number = 0;
  constructor() {
    this.items = [
      {
        "item": "Teclado Logitech",
        "price": 16.40,
        "quantity": 2
      },
      {
        "item": "Ratón Tacens",
        "price": 10.25,
        "quantity": 3
      },
      {
        "item": "Portátil MSI",
        "price": 999,
        "quantity": 1
      },
      {
        "item": "Tablet Lenovo",
        "price": 139,
        "quantity": 2
      },
    ]
    this.items.forEach(i => i.subtotal = i.price * i.quantity);
    this.items.forEach(i => this.total+= i.subtotal);
  }
  getItems(): Cart[] {
    console.log(this.items);
  return this.items;
  }

  getTotal(): number {
    console.log(this.total);
    return this.total;
  }

  addItem(c: Cart) {

    const itemToSave = {
      item: c.item,
      price: c.price,
      quantity: c.quantity,
      subtotal: c.price * c.quantity
    };
    this.items.push(itemToSave);
  }
}
