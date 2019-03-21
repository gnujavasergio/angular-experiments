# Angular

Angularjs => La primera version de Angular

Angular 2, 4 es la evolucion de angular pero no es compatible con angularjs

## Componentes

Que es un Web Components?

* La forma mas rapida de hacer Frontend
* Los web componentes es como algo modular

Carateristicas
* HTML Imports
* Templates
* Shadow DOM => Encapsular el componente se pueden interactar entre componentes pero tiene su propio diseño
* Custom Elements => 

## Configuración

#### Nodejs

Angular requiere Node.js version 8.x or 10.x.
    node -v    
    https://nodejs.org/en/

#### Typescript

Instalar
npm install -g typescript

Actualizar
npm install -g typescript@latest

#### Angular

npm install -g @angular/cli

**Crear mi primer proyecto**
ng new miprimercomponente
https://stackoverflow.com/questions/54434333/error-ts1005-expected-typescript-angular-6-for-first-build-error-rxjs-insi

**Crear un componente**
ng g component [nombre]

g => generate 

**Crear un pipe**
ng g pipe [nombre]

**Generar los Target**
ng build

**Generar un servidor con HTTPS**
ng serve --ssl true

**Ejecutar los Test**
Utiliza Karma para los tes unitarios
ng test

**Utilizar Sass**
Poder utilizar sass en Angular y que pueda compilarlo
ng set defaults.styleExt scss

**gihuh page con Angular**
ng github-pages:deploy --message "Deployando"

## 

### Input

### Output

### Pipes

### Directivas

* ElementRef => Es tomar todo el elemento HTML es como utilizar un getDocumentById oun $('selector') con jquery
* Podemos modificar los elementos nativos de html con el style, type en input, name en input

### Inyección de dependencias

Utilizamos la anotación @Injectable()

### Forms

#### Forms Common

Para utilizar los formularios comunes se importa la dependencia FormsModule

`
  imports: [
    BrowserModule,
    FormsModule
  ],
`

#### Forms Reactives

## Ejemplos

### Ejemplo #1

Crear mi primer componente
[ejemplo1] (ejemplo1)

### Ejemplo #2

Manejo de la anotación Input
[ejemplo2] (ejemplo2)

### Ejemplo #3

Manejo de la anotación Output
[ejemplo3] (ejemplo3)

### Ejemplo #4 

Se crea un Pipe ConversorPipe
[ejemplo4] (ejemplo4)

### Ejemplo5
Crear directivas
[ejemplo5] (ejemplo5)

### Ejemplo6
Aprender utilizar servicios y la inyección de dependencias
[ejemplo6] (ejemplo6)

### Ejemplo7
Formularios comunes en Angular
[ejemplo7] (ejemplo7)

### Ejemplo8
Formularios Reactivos