import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  AccountEventTransaction,
  TransferBoxFormService,
} from '../components/transactions/transfer-box-form/services/transferBoxFormService.service';
import { AccountEvent } from '../models/account';

export const TRANSFER_BOX_FORM_SERVICE: Partial<TransferBoxFormService> = {
  resetFormValues(): void {
    this.setAccountEvent(null);
  },

  getForm(): FormGroup {
    return null;
  },

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
  },
};
