# Conceptos basicos

## Modulos y componentes

### Modulos
- El core de angular tiene modulos que nosotros podemos implementar como por ejemplo.
    - Http
    - Forms
    - Browser
    - Reactive Forms
- Tambien podemos crear nuestro propios modulos.
    - Compras
    - Soporte
    - RRHH
- Explicacion de una declaracion de un modulo
```TypeScript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  // Aqui se declarara los componentes que utilizemos.   
  declarations: [
    AppComponent
  ],
  // Importaremos los modulos externos que se utilizan en el modulo actual
  imports: [
    BrowserModule
  ],
  // Se declarara los servicios de la aplicacion
  providers: [],
  // Aqui indicaremos cual sera el componente con el que se iniciara el modulo.
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### Componentes
- Los componentes son codigo reutilizable que estarian dentro de un modulo.
- Explicacion de una declaracion de un componente:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Selector que se utilizara como etiqueta personalizada
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Hojas de estilo personalizada para el componente
})
export class AppComponent {
  title = 'app';
}
```
## Que es Data Binding?
- Comunicación entre tu codigo de TypeScript y HTML.
- Lo unico que al cliente le importa es lo que ve, asi que comunicar nuestra logica(TypeScript) al template(HTML) es de suma importancia.

### Tipos de Data Binding.
- String Interporlation {{}} TypeScript => HTML
    - Para mostrar texto
    - Para realizar operaciones
- Property Binding [] TypeScript <= HTML
- Event Binding () TypeScript <= HTML
- Two Way Data Binding [()] TypeScript <=> HTML
    - Es bidireccional

#### String Interpolation
- Llamada tambien sintaxis Mustache
- [Ejemplo1](../examples/2-concept-basic/ejemplo1/README.md)

#### Property Binding
- [Ejemplo2](../examples/2-concept-basic/ejemplo2/README.md)

#### Event Binding
- [Ejemplo3](../examples/2-concept-basic/ejemplo3/README.md)

#### Two Way Data Binding
- `ngModel` se puede utilizar pero es necesario añadir el modulo `FormsModule`.
- [Ejemplo4](../examples/2-concept-basic/ejemplo4/README.md)
