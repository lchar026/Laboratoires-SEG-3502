import { TestBed } from '@angular/core/testing';
import {App} from './app';
import {TempConverter} from "./temp-converter/temp-converter";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TempConverter, App]
}));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
