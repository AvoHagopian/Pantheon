import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Country } from './country';
import { COUNTRIES } from './mock-countries';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  getCountries(): Observable<Country[]> {
    return of(COUNTRIES);
  }
  getCountry(id: number): Observable<Country> {
    return of(COUNTRIES.find(country => country.id === id));
  }
  constructor() { }
}
