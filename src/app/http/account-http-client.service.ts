import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import accountEvents from '../../bb-ui/mock-data/transactions.json';
import { AccountEvent, AccountEvents } from '../models/account';

@Injectable({ providedIn: 'root' })
export class AccountHttpClient {
  accountEvents: AccountEvents = accountEvents as AccountEvents;

  getAccountEvents$(): Observable<AccountEvents> {
    return of(accountEvents as AccountEvents);
  }

  postAccountEvent$(value: AccountEvent): void {
    this.accountEvents.data.unshift(value);
  }
}
