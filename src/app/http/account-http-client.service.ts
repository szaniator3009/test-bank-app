import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountHttpClient {
  constructor(private httpClient: HttpClient) {}

  getAccountEvents$(): Observable<any> {
    return of(null);
  }
}
