import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-saludar',
  imports: [
    FormsModule
  ],
  templateUrl: './saludar.html',
  styleUrl: './saludar.css',
})
export class Saludar {
   saludo = "Saludo Inicial";

  get show_saludo() {
    return this.saludo;
  }
}
