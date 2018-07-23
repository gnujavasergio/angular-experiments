import { BrowserModule } from '@angular/platform-browser'; //Para que el codigo funcione en cualquier navegador
import { NgModule } from '@angular/core'; // 

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    // Aqui todos los componentes que se estan generando
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    // Aqui se declara cual es el componente principal
    AppComponent
  ]
})
export class AppModule { }
