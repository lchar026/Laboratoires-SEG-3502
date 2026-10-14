import { Component } from '@angular/core';
import { TempConverter } from './temp-converter/temp-converter';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TempConverter, CalculatorComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
