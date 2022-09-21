import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) { }

  // Debugging, replace with firebase!!
  public _loggedIn = false;

  // returns true if user is currently logged in
  loggedIn(){
    return this._loggedIn;
  }

  // login and attempt to go to explore page
  public logIn(){
    this._loggedIn = true;
    this.router.navigate(['Explore']);
  }

  // log out, return to login page
  public logOut(){
    this._loggedIn = false;
    this.router.navigate(['']);
  }
}
