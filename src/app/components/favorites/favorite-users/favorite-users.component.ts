import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFavoriteUser } from 'src/app/shared/models/favorite-user';
import { FavoriteUserService } from 'src/app/shared/services/favorite-user.service';

@Component({
  selector: 'app-favorite-users',
  templateUrl: './favorite-users.component.html',
  styleUrls: ['./favorite-users.component.scss']
})
export class FavoriteUsersComponent implements OnInit {
  public favorites$: Observable<IFavoriteUser[]>

  constructor(
    private _favUserService: FavoriteUserService
  ) { 
    this._favUserService.fetch()
  }

  async ngOnInit() {
    this.favorites$ = await this._favUserService.favorites$
    console.log(this.favorites$);
    
  }

  remove(id: number) {
    console.log(id);
    this._favUserService.remove(id)
  }
}
