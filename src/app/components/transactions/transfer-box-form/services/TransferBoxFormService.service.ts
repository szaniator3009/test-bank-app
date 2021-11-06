import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { AccountEvent } from 'src/app/models/account';

export interface AccountEventTransaction {
  amount: string;
  account: string;
}
@Injectable({ providedIn: 'root' })
export class TransferBoxFormService {
  constructor(private fb: FormBuilder) {}

  accountEvent$: BehaviorSubject<AccountEventTransaction> =
    new BehaviorSubject<AccountEventTransaction>(null);
  _accountEvent$: Observable<AccountEventTransaction> =
    this.accountEvent$.asObservable();

  private isConfirmed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  setAccountEvent(value: AccountEventTransaction): void {
    this.accountEvent$.next(value);
  }

  setIsConfirmed(value: boolean): void {
    this.isConfirmed$.next(value);
  }

  getIsConfirmed$(): Observable<boolean> {
    return this.isConfirmed$.asObservable();
  }

  resetFormValues(): void {
    this.setAccountEvent(null);
  }

  getForm(): FormGroup {
    const formGroup: FormGroup = this.fb.group({
      toAccount: [null, Validators.required],
      amount: [
        null,
        [Validators.required, Validators.min(1), Validators.max(500)],
      ],
    });
    return formGroup;
  }

  createAccountEvent(event: AccountEventTransaction): AccountEvent {
    return {
      categoryCode: '#12a580',
      dates: {
        valueDate: new Date().getTime(),
      },
      transaction: {
        amountCurrency: {
          amount: event?.amount,
          currencyCode: 'EUR',
        },
        type: 'Online transfer',
        creditDebitIndicator: 'DBIT',
      },
      merchant: {
        name: event?.account,
        accountNumber: 'SI64397745065188826',
      },
    };
  }
}
