import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { God } from './god';
import { GODS } from './mock-gods';

@Injectable({
  providedIn: 'root'
})
export class GodService {
  getGods(): Observable<God[]> {
    return of(GODS);
  }
  constructor() { }
}
