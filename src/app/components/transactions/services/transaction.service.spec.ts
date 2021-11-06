import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { AccountHttpClient } from 'src/app/http/account-http-client.service';
import { AccountEvent, AccountEvents } from 'src/app/models/account';
import { TransactionsService } from './transactions.service';

const ACCOUNT_HTTP_CLIENT_MOCK: Partial<AccountHttpClient> = {
  getAccountEvents$(): Observable<AccountEvents> {
    return of(null);
  },
};

describe('Transactions service', () => {
  let service: TransactionsService;
  let accountHttpClient: AccountHttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TransactionsService,
        { provide: AccountHttpClient, useValue: ACCOUNT_HTTP_CLIENT_MOCK },
      ],
    });
    service = TestBed.inject(TransactionsService);
    accountHttpClient = TestBed.inject(AccountHttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setAccountBalance', () => {
    it('should set accountBalance', (done) => {
      const mockBalance: number = 5000;
      service.setAccountBalance(mockBalance);
      service._accountBalance$.subscribe((val) => {
        expect(mockBalance).toEqual(val);
        done();
      });
    });
  });

  describe('getAccountsEvents$', () => {
    it('should return accounts events', (done) => {
      const mockAccountEvents: AccountEvents = {
        data: [
          {
            categoryCode: '#12a580',
            dates: {
              valueDate: 1600387200000,
            },
            transaction: {
              amountCurrency: {
                amount: '82.02',
                currencyCode: 'EUR',
              },
              type: 'Card Payment',
              creditDebitIndicator: 'DBIT',
            },
            merchant: {
              name: 'The Tea Lounge',
              accountNumber: 'SI64397745065188826',
            },
          },
        ],
      };

      spyOn(accountHttpClient, 'getAccountEvents$').and.returnValue(
        of(mockAccountEvents)
      );
      service.getAccountsEvents$().subscribe((val) => {
        expect(mockAccountEvents).toEqual(val);
        done();
      });
    });
  });

  describe('getTransactionByMerchantName', () => {
    it('should filter transactions', () => {
      let mockTransactions: AccountEvent[] = [
        {
          categoryCode: '12312das',
          merchant: { name: 'Artur' },
        },
        {
          categoryCode: '12312das',
          merchant: { name: 'Andrew' },
        },
        {
          categoryCode: '12312das',
          merchant: { name: 'Classer' },
        },
      ];
      const filteredTransactions: AccountEvent[] =
        service.getTransactionByMerchantName(mockTransactions, 'A');
      expect(filteredTransactions.length).toEqual(2);
    });
  });
});
