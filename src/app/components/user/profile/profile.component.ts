import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user$: Observable<IUser[]>

  constructor(
    private _userService: UserService
  ) { 
    this._userService.fetch()
  }

  ngOnInit(): void {
    this.user$ = this._userService.user$
  }

}
