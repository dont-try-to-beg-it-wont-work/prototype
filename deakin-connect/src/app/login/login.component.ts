import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authServ: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    // If user it already logged in, redirect to home page
    if(this.authServ.loggedIn()){
      this.router.navigate(['Explore']);
    }
  }

  public username = '';
  public password = '';
  public rememberMe = false;

  // Replace with authentication code 
  login(){
    this.authServ.logIn();
  }

}
