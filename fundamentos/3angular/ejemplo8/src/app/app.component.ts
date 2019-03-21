import { Component } from '@angular/core';
import { InputComponent } from './input/input.component';
import { TicketService } from './services/ticket.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  votacion = "";

  votos = [
    { title: 'opción 1' },
    { title: 'opción 2' },
    { title: 'opción 3' },
    { title: 'opción 4' },
    { title: 'opción 5' },
  ];

  cantidad = 5;
  factor = 1;

  // Services and Injectable
  tickets: any;

  // Reactive Forms
  formGroup:FormGroup;

  constructor(
    private ticketService: TicketService,
    private formBuilder: FormBuilder
    ) {
    this.tickets = ticketService.getTickets();

    this.formGroup = formBuilder.group({
      'firstname' : ['Sergio'],
      'lastname' : ['Ochoa'],
      'twitter' : ['@gnujavasergio']
    });
  }

  addVoto(response: string) {
    this.votacion = "Usted eligio: " + response;
  }

  // Forms common
  onSubmit(value: string):void {
    console.log("El formulario tiene", value);

  }
}
