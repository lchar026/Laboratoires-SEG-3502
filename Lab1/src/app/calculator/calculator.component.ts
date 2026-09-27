import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  resultValue: any = 0;

  calculate(val1: string, val2: string, operation: string): void {
    const n1 = Number(val1);
    const n2 = Number(val2);

    if (val1 === '' || val2 === '') {
      this.resultValue = 'Erreur : Entrez deux nombres';
      return;
    }

    switch (operation) {
      case '+':
        this.resultValue = n1 + n2;
        break;
      case '-':
        this.resultValue = n1 - n2;
        break;
      case '*':
        this.resultValue = n1 * n2;
        break;
      case '/':
        this.resultValue = n2 !== 0 ? n1 / n2 : 'Division par zéro !';
        break;
    }
  }
}
