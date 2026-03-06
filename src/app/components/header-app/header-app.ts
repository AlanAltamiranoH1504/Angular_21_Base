import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header-app',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header-app.html',
  styleUrl: './header-app.css',
})
export class HeaderApp {

}
