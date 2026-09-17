import { Component } from '@angular/core';
import { TempConverter } from './temp-converter/temp-converter';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [TempConverter]
})
export class App {
  title = 'lab1-temp-converter';
}
