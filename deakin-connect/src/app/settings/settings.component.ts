import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  public logOut(){
    this.auth.logOut();
  }

  ngOnInit(): void {
  }

}
