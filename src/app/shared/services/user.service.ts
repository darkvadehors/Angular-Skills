import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser, User } from '../models/user';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])
  public user$: Observable<User[]> = this._user$.asObservable()

  constructor(
    private _http: HttpClient
  ) { 
    this.fetch()
  }

  private _httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('token')}`
    })
  }

  fetch() {
    this._http.get<IUser[]>(`http://localhost:3000/user/${localStorage.getItem('uid')}`, this._httpOptions).pipe(
      map(response => response.map(user => new User(user)))
    ).subscribe(
      user => this._user$.next(user) 
    )
  }

  public getUser$(): Observable<User[]> {
    return this.user$
  }

  async updateUser({ name, firstname }, callback: (data: any) => void) {
    const data = await this._http.post(`http://localhost:3000/user/${localStorage.getItem('uid')}`, { name, firstname }, this._httpOptions).subscribe()

    return callback(data)
  }
}
