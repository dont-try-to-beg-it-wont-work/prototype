import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {
  constructor(private auth: AuthenticationService) { }

  public logOut(){
    this.auth.logOut();
  }

  ngOnInit(): void {
  }

  public settingsItems = {
    'Profile' : 'person',
    'Activity Log' : 'list',
    'Privacy' : 'privacy_tip',
    'Help and Support' : 'help',
    'Notifications' : 'notifications',
    'Logout' : 'logout'
  }

  // Required to prevent the *ngFor loop from alphabetically sorting the navItems dict...
  public keypipe() { return 0; }
}
