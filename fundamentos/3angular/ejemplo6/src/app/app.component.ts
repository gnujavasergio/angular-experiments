import { Component } from '@angular/core';
import {InputComponent} from './input/input.component';
import { TicketService } from './services/ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  votacion = "";
  
  votos = [
    {title: 'opción 1'},
    {title: 'opción 2'},
    {title: 'opción 3'},
    {title: 'opción 4'},
    {title: 'opción 5'},
  ];

  cantidad = 5;
  factor= 1;

  tickets:any;

  constructor(private ticketService:TicketService){
    this.tickets = ticketService.getTickets();
  }

  addVoto(response:string){
    this.votacion = "Usted eligio: " + response;
  }
}
