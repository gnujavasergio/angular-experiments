## Directivas
- Hay tres tipos de directivas
    1. **Componentes**: Directivas con un template
    2. **Estructurales**: Directivas que cambian el DOM
    3. **Atributos**: DIrectivas implementadas a traves de atributos que pueden modificar el elemento al que estan asignados.

## Directivas estructurales
- No puedese añadir dos directivas estructurales a una misma etiqueta

### Directiva ngIf
- `*ngIf` o `[ngIf]`(solo se puede utilizar en una etiqueta ng-template) 
- `*ngIf (condicion); else idElse`  o `[ngIf]="condicion" [ngIfElse]="idElse"`
- `*ngIf (condicion); then idThen ; else idElse` o `[ngIf]="condicion" [ngIfThen]="idThen" [ngIfElse]="idElse"`
- [https://ultimatecourses.com/blog/angular-ngif-else-then](https://ultimatecourses.com/blog/angular-ngif-else-then)
- [https://codecraft.tv/courses/angular/built-in-directives/structural-directives/](https://codecraft.tv/courses/angular/built-in-directives/structural-directives/)
- [Ejemplo1](../examples/3-directivas/ejemplo1/README.md)

### Directiva ngFor
- `*ngFor`: para recorrer una lista
```html
<ul>
  <li *ngFor="let business of businesses">
    {{ business.name }}
  </li>
</ul>
```
- [Ejemplo2](../examples/3-directivas/ejemplo2/README.md)

### Directiva ngSwitch
- ngSwitch es una directiva de atributo por este motivo tiene que utilizarse en un etiqueta de html
- [https://codecraft.tv/courses/angular/built-in-directives/ngif-and-ngswitch/](https://codecraft.tv/courses/angular/built-in-directives/ngif-and-ngswitch/)
```html
<ul [ngSwitch]="day">
  <li *ngSwitchCase="1">Lunes</li>
  <li *ngSwitchCase="2">Martes</li>
  <li *ngSwitchDefault> No es un dia</li>
</ul>
```
- [Ejemplo3](../examples/3-directivas/ejemplo3/README.md)

### Directiva ngStyle y ngClass
- La directiva **ngStyle** permite establecer propiedades de estilo de elementos DOM determinados
- [https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/](https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/)
- [Ejemplo4](../examples/3-directivas/ejemplo4/README.md)