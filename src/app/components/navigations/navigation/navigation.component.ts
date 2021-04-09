import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _route: Router
  ) { }

  ngOnInit(): void {
  }

  async loggout(){
    const loggout = await this._authService.loggout()

    console.log(loggout);
    for (const iterator of Object.entries(loggout)) {
      if(iterator[1] === 'Loggout'){
        localStorage.clear()
        
        this._route.navigate(['/signin'])
      } 
    }
  }
}
