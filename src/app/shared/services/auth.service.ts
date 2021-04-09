import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { IUser, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _basePatch = 'http://localhost:3000/auth'

  constructor(
    private _http: HttpClient
  ) { }

  private _httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('token')}`
    })
  }

  async signin({email, password}) {
    const data = await this._http.post<IUser[]>(`${this._basePatch}/signin`, {email, password}).toPromise()

    return data
  }

  async signup({email, password}) {
    const data = await this._http.post<IUser[]>(`${this._basePatch}/signup`, {email, password}).toPromise()

    return data
  }

  async loggout(){
    return await this._http.get(`${this._basePatch}/loggout/${localStorage.getItem('uid')}`, this._httpOptions).toPromise()
  }

  async isLogged(uid: number){
    const data = await this._http.get(`${this._basePatch}/isLogged/${uid}`, this._httpOptions).toPromise()

    return data
  }
}
