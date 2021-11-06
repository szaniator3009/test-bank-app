import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DialogBelonging } from '@costlydeveloper/ngx-awesome-popup';
import { Observable, of, switchMap, tap } from 'rxjs';
import { TransactionsService } from '../transactions/services/transactions.service';
import { SubSink } from 'subsink';
import {
  AccountEventTransaction,
  TransferBoxFormService,
} from '../transactions/transfer-box-form/services/transferBoxFormService.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit, OnDestroy {
  private subSink: SubSink = new SubSink();
  accountEvent$: Observable<AccountEventTransaction>;
  constructor(
    @Inject('dialogBelonging') private dialogBelonging: DialogBelonging,
    private transferBoxFormService: TransferBoxFormService,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.accountEvent$ = this.transferBoxFormService._accountEvent$;
  }

  closeModal(): void {
    this.dialogBelonging.EventsController.close();
    this.transferBoxFormService.resetFormValues();
    this.transferBoxFormService.setIsConfirmed(false);
  }

  confirm(): void {
    this.subSink.sink = this.addAccountEvent$().subscribe();
    this.transferBoxFormService.setIsConfirmed(true);
    this.dialogBelonging.EventsController.close();
  }

  private addAccountEvent$(): Observable<any> {
    return this.transferBoxFormService._accountEvent$.pipe(
      switchMap((event) => {
        this.transactionsService.postAccountEvent$(
          this.transferBoxFormService.createAccountEvent(event)
        );
        return of(event);
      })
    );
  }

  ngOnDestroy() {
    this.subSink.unsubscribe();
  }
}
