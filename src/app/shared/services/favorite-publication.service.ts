import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { FavoritePublications } from '../models/favorite-publications';

@Injectable({
  providedIn: 'root'
})
export class FavoritePublicationService {
  private _basePatch: string = 'http://localhost:3000'
  private _favoties$: BehaviorSubject<FavoritePublications[]> = new BehaviorSubject<FavoritePublications[]>([])

  public favorites$: Observable<FavoritePublications[]> = this._favoties$.asObservable()

  private _httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('token')}`
    })
  }

  constructor(
    private _http: HttpClient
  ) { }

  fetch(){
    this._http.get<FavoritePublications[]>(`${this._basePatch}/favPublications/` + localStorage.getItem('uid'), this._httpOptions).pipe(
      map(favorites => favorites.map(fav => new FavoritePublications(fav)))
    ).subscribe(
      favorites => this._favoties$.next(favorites)
    )
  }

  async add(id: number, uid: number) {
    const data = { id, uid }

    return await this._http.post(`${this._basePatch}/favPublications`, data, this._httpOptions).toPromise()
  }

  remove(id: number) {
    const uid: number = parseInt(localStorage.getItem('uid'))
    const data = {id, uid}

    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('token')}`
      }),
      body: data
    }

    this._http.delete(`${this._basePatch}/favPublications`,  httpOptions).pipe(
      tap(res => {
        for (const [key, value] of Object.entries(res)) {
          if(key === 'affectedRows' && value === 1){
            this.fetch()
          }
        }
      })
    ).subscribe()
  }
}
