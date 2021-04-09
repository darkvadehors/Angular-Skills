import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators'
import { IPublication, Publication } from '../models/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private _publications: BehaviorSubject<Publication[]> = new BehaviorSubject<Publication[]>([])
  public publications$: Observable<Publication[]> = this._publications.asObservable()

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

  fetch(){
    this._http.get<IPublication[]>('http://localhost:3000/publications', this._httpOptions).pipe(
      //tap(publications => console.log(publications)),
      map(publications => publications.map(publication => new Publication(publication)))
    ).subscribe(
      publications => this._publications.next(publications)
    )
  }

  getAll$(): Observable<Publication[]>{
    return this.publications$
  }
}
