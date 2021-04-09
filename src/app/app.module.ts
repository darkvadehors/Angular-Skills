import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { PublicationComponent } from './components/publications/publication/publication.component';
import { NavigationComponent } from './components/navigations/navigation/navigation.component';
import { ProfileEditComponent } from './components/user/profile-edit/profile-edit.component';
import { FavoriteUsersComponent } from './components/favorites/favorite-users/favorite-users.component';
import { FavoritePublicationsComponent } from './components/favorites/favorite-publications/favorite-publications.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    PublicationComponent,
    NavigationComponent,
    ProfileEditComponent,
    FavoriteUsersComponent,
    FavoritePublicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
