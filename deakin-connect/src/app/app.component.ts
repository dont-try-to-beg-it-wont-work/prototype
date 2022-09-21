import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'deakinConnect';
  constructor(public authServ: AuthenticationService) {}
  
  public loggedIn(){ return this.authServ.loggedIn(); }
}
