import { TransactionsService } from './../services/transactions.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of, switchMap } from 'rxjs';
import { DialogInitializer } from '@costlydeveloper/ngx-awesome-popup';
import { ModalComponent } from '../../modal/modal.component';
import { SubSink } from 'subsink';
import { TransferBoxFormService } from './services/transferBoxFormService.service';

@Component({
  selector: 'app-transfer-box-form',
  templateUrl: './transfer-box-form.component.html',
})
export class TransferBoxFormComponent implements OnInit {
  form: FormGroup;
  accountBalance$: Observable<number>;
  private subSink: SubSink = new SubSink();
  constructor(
    private transferBoxFormService: TransferBoxFormService,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.form = this.transferBoxFormService.getForm();
    this.accountBalance$ = this.transactionsService.getAccountBalance$();
    this.transferBoxFormService
      .getIsConfirmed$()
      .pipe(
        switchMap((value) => {
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

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }
}
