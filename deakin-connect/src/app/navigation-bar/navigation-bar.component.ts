import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})

export class NavigationBarComponent{

  constructor(private router: Router, private authServ : AuthenticationService) {   }

  // Route & pagename / icon
  public navItems = {
    'Explore' : 'explore',
    'Events' : 'event',
    'Friends' : 'group',
    'Settings' : 'settings'
  }

  // Returns if user is logged in
  public isLoggedIn(){ return this.authServ.loggedIn() }

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
