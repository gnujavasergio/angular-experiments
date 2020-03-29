import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Event Binding';

  constructor(){

  }

  showMessage():void {
    alert("Se presiono el boton")
  }
}
