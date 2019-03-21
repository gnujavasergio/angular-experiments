import { Injectable } from "@angular/core";
import { TICKETS } from "./mocks/tickets.mock";

@Injectable()
export class TicketService {
    ticketGlobal = "Soy una variable global";

    getTickets() {
        return TICKETS;
    }

    getTicketGlobal(): string {
        return this.ticketGlobal;
    }

}