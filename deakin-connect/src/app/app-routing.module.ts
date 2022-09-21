import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/authGuard/auth.guard';

// Pages
import { LoginPageComponent } from './pages/loginPage/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },{
    path: 'SignUp',
    component: RegistrationPageComponent
  },{
    path: 'Explore',
    component: ExplorePageComponent,
    canActivate: [AuthGuard]
  },{
    path: 'Friends',
    component: FriendsPageComponent,
    canActivate: [AuthGuard]
  },{
    path: 'Settings',
    component: SettingsPageComponent,
    canActivate: [AuthGuard]
  },{
    path: 'Events',
    component: EventsPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
