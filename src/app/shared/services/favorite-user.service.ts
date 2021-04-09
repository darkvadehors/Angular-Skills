import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FavoriteUserService {
  private _basePath: string = 'http://localhost:3000'
  
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('token')}`
    })
  }

  constructor(
    private _http: HttpClient
  ) { }

  async add(favoriteId: number) {
    const uid: number = parseInt(localStorage.getItem('uid'))
    const data = { uid, favoriteId }

    return await this._http.post(`${this._basePath}/favUsers`, data, this._httpOptions).pipe(
      tap(res => {
        console.log('debug response backend => ',res);
        
      })
    ).toPromise()
  }

}
