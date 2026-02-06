import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  protected auth = signal(false);

  change_auth() {
    this.auth.set(!this.auth());
  }

  get get_auth() {
    return this.auth();
  }
}
