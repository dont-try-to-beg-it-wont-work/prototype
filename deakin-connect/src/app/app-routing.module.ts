import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

// Pages
import { LoginComponent } from './login/login.component';
import { ExploreComponent } from './explore/explore.component';
import { EventsComponent } from './events/events.component';
import { ConnectComponent } from './connect/connect.component';
import { SettingsComponent } from './settings/settings.component';

// Routes with 'canActivate: [AuthGuard]' will only load if user is logged in
// Otherwise they are redirected to a login page
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },{
    path: 'Explore',
    component: ExploreComponent,
    canActivate: [AuthGuard]
  },{
    path: 'Events',
    component: EventsComponent,
    canActivate: [AuthGuard]
  },{
    path: 'Connect',
    component: ConnectComponent,
    canActivate: [AuthGuard]
  },{
    path: 'Settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
