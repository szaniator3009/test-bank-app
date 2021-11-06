import { Component, OnInit } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { URL_IMAGES } from 'src/app/const/urls';
import { AccountEvents } from 'src/app/models/account';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css'],
})
export class TransactionsListComponent implements OnInit {
  accountEvents$: Observable<AccountEvents>;
  urlImages = URL_IMAGES;
  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.accountEvents$ = this.transactionsService.getAccountsEvents$();
  }

  handleInputChange(e: any): void {
    e !== ''
      ? (this.accountEvents$ = this.transactionsService
          .getAccountsEvents$()
          .pipe(
            switchMap((events) => {
              return of({
                data: this.transactionsService.getTransactionByMerchantName(
                  events.data,
                  e
                ),
              });
            })
          ))
      : (this.accountEvents$ = this.transactionsService.getAccountsEvents$());
  }
}
