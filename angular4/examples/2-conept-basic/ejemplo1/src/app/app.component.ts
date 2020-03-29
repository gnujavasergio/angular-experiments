import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  app: String = 'Ejemplo1'
  tittle: String = 'String Interpolation';
  a: number = 8;
  b: number = 5;
}