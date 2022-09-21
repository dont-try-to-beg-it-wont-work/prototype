import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

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

  toSignUpPage(){
    this.router.navigate(['SignUp']);
  }

  canLogin(){ return this.password.length > 0 }
}
