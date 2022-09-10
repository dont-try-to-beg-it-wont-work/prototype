import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deakin-connect';
  constructor(public authServ: AuthenticationService, private router: Router) {}
  public isLoggedIn(){ return this.authServ.loggedIn() }

  // name : icon (google icons)
  // For routing to work the path(app-routing.module.ts) must be the same as the name below
  public navItems = {
    'Explore' : 'explore',
    'Events' : 'event',
    'Connect' : 'group',
    'Settings' : 'settings'
  }

  // index of current navItem
  public currentNavItemIndex = 0;

  // Required to prevent the *ngFor loop from alphabetically sorting the navItems dict...
  public keypipe() { return 0; }

  // Used to track if sideNav is open
  public sideNavOpen = false;

  // Called when a nav item is clicked, changes current page & closes side nav
  public updatePage(index: number, pageName: string){
    this.sideNavOpen = false;
    this.currentNavItemIndex = index;
    this.router.navigate([pageName]);
  }
}