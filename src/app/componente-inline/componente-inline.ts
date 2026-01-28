import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-inline',
  imports: [],
  template: `
    <p class="text-white text-center text-xl font-semibold">
      Nuevo Componente en Linea
      {{titleComponenteInline}}
    </p>
  `,
  styles: ``,
})
export class ComponenteInline {
  protected titleComponenteInline = "Vanessa Adriana Rivera Garcia";
}
