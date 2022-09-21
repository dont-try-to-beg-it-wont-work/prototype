import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Nav elements
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

// Pages
import { LoginPageComponent } from './pages/loginPage/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { FriendsPageComponent } from './pages/friends-page/friends-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';

// Templates
import { PageTemplateComponent } from './templates/page-template/page-template.component';
import { EventPreviewComponent } from './templates/event-preview/event-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    PageTemplateComponent,
    ExplorePageComponent,
    FriendsPageComponent,
    SettingsPageComponent,
    EventsPageComponent,
    EventPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
