import { Component } from '@angular/core';
import { Header } from './header/header';
import { AddItem } from './add-item/add-item';
import { ShoppingList } from './shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [Header, AddItem, ShoppingList]
})
export class App {
  items: string[] = [];

  onItemAdded(item: string): void {
    this.items = [item, ...this.items];
  }

  onItemRemoved(index: number): void {
    this.items = this.items.filter((_, i) => i !== index);
  }
}
