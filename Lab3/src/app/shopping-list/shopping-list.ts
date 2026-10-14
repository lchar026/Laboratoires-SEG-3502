import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.html',
  styleUrls: ['./shopping-list.css']
})
export class ShoppingList {
  @Input() items: string[] = [];
  @Output() itemRemoved = new EventEmitter<number>();

  remove(index: number): void {
    this.itemRemoved.emit(index);
  }
}
