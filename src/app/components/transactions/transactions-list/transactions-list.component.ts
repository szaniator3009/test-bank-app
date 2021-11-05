import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_IMAGES } from 'src/app/const/urls';
import { AccountEvents } from 'src/app/models/account';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
})
export class TransactionsListComponent implements OnInit {
  accountEvents$: Observable<AccountEvents>;
  urlImages = URL_IMAGES;
  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.accountEvents$ = this.transactionsService._accountsEvents$;
  }
}
