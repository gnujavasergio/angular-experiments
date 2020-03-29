import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Two Way Data Binding';
  fullName: String;
  constructor(){
    this.fullName = "Sergio Ochoa";
  }

}
