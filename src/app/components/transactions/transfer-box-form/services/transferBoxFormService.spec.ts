import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { AccountHttpClient } from 'src/app/http/account-http-client.service';
import { AccountEvent, AccountEvents } from 'src/app/models/account';
import {
  AccountEventTransaction,
  TransferBoxFormService,
} from './transferBoxFormService.service';

describe('Transactions service', () => {
  let service: TransferBoxFormService;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransferBoxFormService, FormBuilder],
    });
    service = TestBed.inject(TransferBoxFormService);
    formBuilder = TestBed.inject(FormBuilder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('set', () => {
    it('should set accountEvents', (done) => {
      const mockEvent: AccountEventTransaction = {
        amount: '500',
        account: 'test',
      };
      service.setAccountEvent(mockEvent);
      service.accountEvent$.subscribe((val) => {
        expect(mockEvent).toEqual(val);
        done();
      });
    });

    it('should set IsConfirmed', (done) => {
      service.setIsConfirmed(false);
      service.getIsConfirmed$().subscribe((val) => {
        expect(false).toEqual(val);
        done();
      });
    });

    it('should reset acount event', (done) => {
      service.resetFormValues();
      service.accountEvent$.subscribe((val) => {
        expect(val).toBeNull();
        done();
      });
    });
  });

  describe('form', () => {
    it('should return valid form', () => {
      let form: FormGroup = service.getForm();
      expect(form.controls).not.toBeNull();
    });

    it('should return valid form', () => {
      let form: FormGroup = service.getForm();
      expect(form.get('amount').value).toBeNull();
      expect(form.get('toAccount').value).toBeNull();
    });
  });

  it('create acount event', () => {
    let event: AccountEventTransaction = { amount: '500', account: 'test' };
    let createdTransaction = service.createAccountEvent(event);
    expect(createdTransaction.merchant.name).toEqual('test');
    expect(createdTransaction.transaction.amountCurrency.amount).toEqual('500');
    expect(createdTransaction.transaction.amountCurrency.currencyCode).toEqual(
      'EUR'
    );
  });
});
