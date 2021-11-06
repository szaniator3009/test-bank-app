import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, switchMap } from 'rxjs';
import { AccountHttpClient } from 'src/app/http/account-http-client.service';
import { AccountEvent, AccountEvents } from 'src/app/models/account';

@Injectable({ providedIn: 'root' })
export class TransactionsService {
  private accountBalance$: BehaviorSubject<number> =
    new BehaviorSubject<number>(5824.76);

  constructor(private accountHttpClient: AccountHttpClient) {}

  setAccountBalance(value: number): void {
    this.accountBalance$.next(value);
  }

  getAccountsEvents$(): Observable<AccountEvents> {
    return this.accountHttpClient.getAccountEvents$().pipe(
      catchError((err) => {
        alert(err.message);
        return err;
      })
    );
  }
  getAccountBalance$(): Observable<number> {
    return this.accountBalance$.asObservable();
  }

  postAccountEvent$(value: AccountEvent): void {
    this.accountHttpClient.postAccountEvent$(value);
  }

  getTransactionByMerchantName(transactions: AccountEvent[], name: string) {
    return transactions.filter((transaction) =>
      transaction?.merchant?.name.toLowerCase().startsWith(name.toLowerCase())
    );
  }
}
