import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../interfaces/item';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent{

  @Input()
  item: Item;

  @Output()
  cancelItemRequest = new EventEmitter<number>();

  cancelItem(): void {
    this.cancelItemRequest.emit(this.item.id);
  }
}