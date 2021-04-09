import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFavoritePublications } from 'src/app/shared/models/favorite-publications';
import { FavoritePublicationService } from 'src/app/shared/services/favorite-publication.service';

@Component({
  selector: 'app-favorite-publications',
  templateUrl: './favorite-publications.component.html',
  styleUrls: ['./favorite-publications.component.scss']
})
export class FavoritePublicationsComponent implements OnInit {
  public favorites$: Observable<IFavoritePublications[]>

  constructor(
    private _favService: FavoritePublicationService
  ) { 
    this._favService.fetch()
  }

  ngOnInit(): void {
    this.favorites$ = this._favService.favorites$
  }

  remove(id: number) {
    this._favService.remove(id)
  }
}
