import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FavoritePublicationsComponent } from './components/favorites/favorite-publications/favorite-publications.component';
import { FavoriteUsersComponent } from './components/favorites/favorite-users/favorite-users.component';
import { NavigationComponent } from './components/navigations/navigation/navigation.component';
import { PublicationComponent } from './components/publications/publication/publication.component';
import { ProfileEditComponent } from './components/user/profile-edit/profile-edit.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { IsLoggedGuard } from './shared/guards/is-logged.guard';


const routes: Routes = [
  {path: '', component: NavigationComponent, canActivate: [IsLoggedGuard], children: [
    {path: 'publications', component: PublicationComponent},
    {path: 'user/:id', component: PublicationComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'profile-edit', component: ProfileEditComponent},
    {path: 'favorite-user', component: FavoriteUsersComponent},
    {path: 'favorite-pub', component: FavoritePublicationsComponent}
  ]},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
