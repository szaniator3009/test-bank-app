import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountEvents } from 'src/app/models/account';
import { TransactionsService } from './services/transactions.service';

@Component({
  selector: 'app-transactions-board',
  templateUrl: './transactions-board.component.html',
})
export class TransactionsBoardComponent implements OnInit {
  accountsEvents$: Observable<AccountEvents>;
  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.accountsEvents$ = this.transactionsService._accountsEvents$;
    this.accountsEvents$.subscribe(console.log);
  }
}
