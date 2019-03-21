import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola OpenKM';
  name = "Sergio";

  eventClick():void {
    this.name = this.name.toUpperCase();
    console.log("Hola estoy escuchando");
    
  }
}
