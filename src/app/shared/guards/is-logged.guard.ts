import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {

  constructor(
    private _route: Router,
    private _authService: AuthService
  ){}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    
      const userId = localStorage.getItem('uid')
      const token = localStorage.getItem('token')
  
      if(userId === null && token === null){
        console.log('uid token null');
        
        this._route.navigate(['/signin'])
        return false
      }
      else{
        const result = await this._authService.isLogged(parseInt(userId))
       
        if(result[0].isLogged < 1){
          console.log('not logged');
          
          this._route.navigate(['/signin'])
          return false
        }
        else if(result[0].isLogged === 1){
          console.log('Logged');
          
          return true
        }
      }
  }
}
