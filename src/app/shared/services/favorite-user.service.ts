import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { FavoriteUser, IFavoriteUser } from '../models/favorite-user';

@Injectable({
  providedIn: 'root'
})
export class FavoriteUserService {
  private _basePath: string = 'http://localhost:3000/favUsers'
  private _favorites$: BehaviorSubject<FavoriteUser[]> = new BehaviorSubject<FavoriteUser[]>([])
  
  public favorites$: Observable<FavoriteUser[]> = this._favorites$.asObservable()
  
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('token')}`
    })
  }

  constructor(
    private _http: HttpClient
  ) { 
    this.fetch()
  }

  fetch() {
    this._http.get<FavoriteUser[]>(`${this._basePath}/${localStorage.getItem('uid')}`, this._httpOptions).pipe(
      map(favorites => favorites.map(favorite => new FavoriteUser(favorite)))
    ).subscribe(
      favorites => this._favorites$.next(favorites)
    )
  }

  async add(favoriteId: number) {
    const uid: number = parseInt(localStorage.getItem('uid'))
    const data = { uid, favoriteId }

    return await this._http.post(`${this._basePath}`, data, this._httpOptions).pipe(
      tap(res => {
        console.log('debug response backend => ',res);
        
      })
    ).toPromise()
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

    this._http.delete(`${this._basePath}`, httpOptions).pipe(
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
