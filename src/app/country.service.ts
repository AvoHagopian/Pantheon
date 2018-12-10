import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Country } from './country';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  constructor( private http: HttpClient ) { }

  private countriesUrl = 'api/countries';

  // GET many
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl).pipe(
      catchError(this.handleError('getCountries', []))
    );
  }

  // GET one
  getCountry(id: number): Observable<Country> {
    const url = `${this.countriesUrl}/${id}`;
    return this.http.get<Country>(url).pipe(
      catchError(this.handleError<Country>(`getCountry id=${id}`))
    );
  }

  // PUT
  updateCountry(country: Country): Observable<any> {
    return this.http.put(this.countriesUrl, country, httpOptions).pipe(
      catchError(this.handleError<any>('updateCountry'))
    );
  }

  // POST
  addCountry (country: Country): Observable<Country> {
    return this.http.post<Country>(this.countriesUrl, country, httpOptions).pipe(
      catchError(this.handleError<Country>('addCountry'))
    );
  }

  // DELETE
  deleteCountry (country: Country | number): Observable<Country> {
    const id = typeof country === 'number' ? country : country.id;
    const url = `${this.countriesUrl}/${id}`;

    return this.http.delete<Country>(url, httpOptions).pipe(
      catchError(this.handleError<Country>('deleteCountry'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
