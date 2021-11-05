import { TransactionsService } from './../services/transactions.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { TransferBoxFormService } from './services/TransferBoxFormService.service';

@Component({
  selector: 'app-transfer-box-form',
  templateUrl: './transfer-box-form.component.html',
})
export class TransferBoxFormComponent implements OnInit {
  form: FormGroup;
  accountBalance$: Observable<number>;
  constructor(
    private transferBoxFormService: TransferBoxFormService,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.form = this.transferBoxFormService.getForm();
    this.accountBalance$ = this.transactionsService._accountBalance$;
  }

  submitForm(): void {
    this.form.markAllAsTouched();
  }
}
