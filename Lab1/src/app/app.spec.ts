import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { TempConverter } from './temp-converter/temp-converter';
import { CalculatorComponent } from './calculator/calculator.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, TempConverter, CalculatorComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
