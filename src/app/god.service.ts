import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { God } from './god';
import {Country } from './country';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class GodService {

  constructor( private http: HttpClient ) { }

  private godsUrl = 'api/gods';

  // GET many
  getGods(): Observable<God[]> {
    return this.http.get<God[]>(this.godsUrl).pipe(
      catchError(this.handleError('getGods', []))
    );
  }

  // GET one
  getGod(id: number): Observable<God> {
    const url = `${this.godsUrl}/${id}`;
    return this.http.get<God>(url).pipe(
      catchError(this.handleError<God>(`getGod id=${id}`))
    );
  }

  // PUT
  updateGod(god: God): Observable<any> {
    const url = `${this.godsUrl}/${god.id}`;
    return this.http.put(url, god, httpOptions).pipe(
      catchError(this.handleError<any>('updateGod'))
    );
  }

  // POST
  addGod (god: God): Observable<God> {
    return this.http.post<God>(this.godsUrl, god, httpOptions).pipe(
      catchError(this.handleError<God>('addGod'))
    );
  }

  // DELETE
  deleteGod (god: God | number): Observable<God> {
    const id = typeof god === 'number' ? god : god.id;
    const url = `${this.godsUrl}/${id}`;

    return this.http.delete<God>(url, httpOptions).pipe(
      catchError(this.handleError<God>('deleteGod'))
    );
  }

  getCountry(id: number): Observable<Country> {
    const url = `api/countries/${id}`;
    return this.http.get<Country>(url).pipe(
      catchError(this.handleError<Country>('getCountry'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
