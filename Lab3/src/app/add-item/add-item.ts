import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.html',
  styleUrls: ['./add-item.css']
})
export class AddItem {
  @Output() itemAdded = new EventEmitter<string>();

  add(value: string, inputEl: HTMLInputElement): void {
    const trimmed = value.trim();
    if (trimmed === '') return;
    this.itemAdded.emit(trimmed);
    inputEl.value = '';
  }
}
