import { Observable, of } from 'rxjs';
import { AccountEvent, AccountEvents } from 'src/app/models/account';
import { TransactionsService } from '../components/transactions/services/transactions.service';

export const TRANSACTIONS_SERVICE_MOCK: Partial<TransactionsService> = {
  setAccountBalance(value: number): void {},

  getAccountsEvents$(): Observable<AccountEvents> {
    return of(null);
  },

  getAccountBalance$(): Observable<number> {
    return of(null);
  },

  postAccountEvent$(value: AccountEvent): void {},

  getTransactionByMerchantName(transactions: AccountEvent[], name: string) {
    return transactions.filter((transaction) => transaction?.merchant?.name.toLowerCase().startsWith(name.toLowerCase()));
  },
};
