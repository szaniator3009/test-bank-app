import { TransactionsService } from './../services/transactions.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of, switchMap } from 'rxjs';
import { TransferBoxFormService } from './services/TransferBoxFormService.service';
import { DialogInitializer } from '@costlydeveloper/ngx-awesome-popup';
import { ModalComponent } from '../../modal/modal.component';

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
    this.transferBoxFormService._isConfirmed$
      .pipe(
        switchMap((value) => {
          console.log(value);
          value === true && this.form.reset();
          return of(value);
        })
      )
      .subscribe();
  }

  submitForm(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.transferBoxFormService.setAccountEvent({
        amount: this.form.get('amount').value,
        account: this.form.get('toAccount').value,
      });
      this.openPopup();
    }
  }

  openPopup() {
    const modal = new DialogInitializer(ModalComponent);
    modal.openDialog$<any>().subscribe();
  }
}
