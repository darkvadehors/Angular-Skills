import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { find, tap, map } from 'rxjs/operators';
import { IPublication } from 'src/app/shared/models/publication';
import { FavoritePublicationService } from 'src/app/shared/services/favorite-publication.service';
import { FavoriteUserService } from 'src/app/shared/services/favorite-user.service';
import { PublicationService } from 'src/app/shared/services/publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  public title: string = 'Publications'
  public filter: boolean = false
  public publications$: Observable<IPublication[]>
  private _uid: number = null

  constructor(
    private _pubService: PublicationService,
    private _favService: FavoritePublicationService,
    private _favUserService: FavoriteUserService,
    private _activeRoute: ActivatedRoute
  ) { 
    this._pubService.fetch()

    if(this._activeRoute.snapshot.paramMap.get('id') != null){
      this._uid = parseInt(this._activeRoute.snapshot.paramMap.get('id'))
    }
  }

  ngOnInit(): void {
    this.publications$ = this._pubService.publications$

    if(this._uid != null){
      this.publications$ = this._pubService.publications$.pipe(
        map(el => el.filter(res => res.publication_userId == this._uid))
      )
      
      this.filter = true
    }
  }

  addFavoritePublication(id: number){
    this._favService.add(id, parseInt(localStorage.getItem('uid')))
  }

  addFavoriteUser(id: number){
    const userId: number = parseInt(localStorage.getItem('uid'))

    this._favUserService.add(id)
  }
}
