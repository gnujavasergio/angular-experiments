import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Components
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
//Pipes
import { ConversorPipe } from './pipes/conversor.pipe';
//Directives
import { GigantDirective } from './directives/gigant.directive';
import { HighlightDirective } from './directives/highlight.directive';
// Services
import { TicketService } from './services/ticket.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    GigantDirective,
    HighlightDirective    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
