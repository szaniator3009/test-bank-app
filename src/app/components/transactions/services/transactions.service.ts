import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { AccountHttpClient } from 'src/app/http/account-http-client.service';
import { AccountEvent, AccountEvents } from 'src/app/models/account';

@Injectable({ providedIn: 'root' })
export class TransactionsService {
  private accountBalance$: BehaviorSubject<number> =
    new BehaviorSubject<number>(5824.76);
  _accountBalance$: Observable<number> = this.accountBalance$.asObservable();

  private transactions$: BehaviorSubject<number> = new BehaviorSubject<number>(
    58324.76
  );
  _transactions$: Observable<number> = this.transactions$.asObservable();

  private accountsEvents$: BehaviorSubject<AccountEvents> =
    new BehaviorSubject<AccountEvents>(null);

  _accountsEvents$: Observable<AccountEvents> =
    this.accountsEvents$.asObservable();

  constructor(private accountHttpClient: AccountHttpClient) {
    this.getAccountsEvents$().subscribe();
  }

  getAccountsEvents$(): Observable<AccountEvents> {
    return this.accountHttpClient.getAccountEvents$().pipe(
      switchMap((data) => {
        this.setAccountEvents(data);
        return of(data);
      })
    );
  }

  postAccountEvent$(value: AccountEvent): void {
    this.accountHttpClient.postAccountEvent$(value);
  }

  setAccountBalance(value: number): void {
    this.accountBalance$.next(value);
  }

  setAccountEvents(value: AccountEvents): void {
    this.accountsEvents$.next(value);
  }
}
