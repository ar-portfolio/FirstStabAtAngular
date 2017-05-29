import { Component } from '@angular/core';

import { ItemComponent } from './item/item.component';
import { Item } from './interfaces/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Testing Multiple Item Feature.  Good Luck!';
  i: number = 1;
  items: Item[] = [];

  addItem(): void {
    this.items.push({
      id: this.i, 
      name: 'I am item number ' + this.i
    });
    this.i++;
  }

  deleteItem(id: number): void {
     this.items = this.items.filter(item => item.id !== id);
  }
}