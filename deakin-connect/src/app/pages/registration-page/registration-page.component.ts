import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css', './registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  constructor(private authServ: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  // used to track current stage of account creation
  currentStageIndex = 0;

  userName = '';
  password = '';
  email = '';
  confPassword = '';
  termsConditions = false;
  selectedPreferences = new Array;
  enableImage = false;

  preferences = ["Workshops", "Arts", "Gaming", "Sports", "Burwood Campus", "Music", "Outdoors"];

  // Adds prefence to array, or remove if it exists
  toPreferences(preference: String){
    var index = this.selectedPreferences.indexOf(preference);
    if(index != -1){
      this.selectedPreferences.splice(index, 1)
      return;
    }
    this.selectedPreferences.push(preference);
  }

  // returns true if user has at least one preference, otherwise false
  userHasPreferences(){
    if(this.selectedPreferences.length > 0){
      return true;
    }
    return false;
  }

  // returns true if preference is selected
  preferenceSelected(preference: String){
    var index = this.selectedPreferences.indexOf(preference) != -1;
    return index ? true:false;
  }

  //
  nextStage(canProcees: boolean){
    if(canProcees){
      this.currentStageIndex++;
    }
  }

  // Used to give the icon type to nav icons
  iconType(stageindex: number){
    if(this.currentStageIndex == stageindex){
      return "lens"
    }
    return "trip_origin";
  }

  decrementStageIndex(){
    if(this.currentStageIndex == 0){
      // return to login page
      this.router.navigate(['']);
      return;
    }
    this.currentStageIndex--;
  }

  createAccount(){
    if(this.userHasPreferences()){
      this.authServ.logIn();
    }
  }

}
