import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BbUIModule } from 'src/bb-ui/bb-ui.module';
import { SubmitButtonComponent } from 'src/bb-ui/components/submit-button/submit-button.component';
import { TransactionsService } from '../services/transactions.service';
import { TransactionsBoardComponent } from '../transactions-board.component';
import { TransferBoxFormService } from './services/transferBoxFormService.service';

import { TransferBoxFormComponent } from './transfer-box-form.component';
import { TRANSACTIONS_SERVICE_MOCK } from '../../../mock-services/transactionsService.mock.service';
describe('TransferBoxFormComponent', () => {
  let component: TransferBoxFormComponent;
  let fixture: ComponentFixture<TransferBoxFormComponent>;
  let transferBoxFormService = TransferBoxFormService;
  let transactionsService = TransactionsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferBoxFormComponent, SubmitButtonComponent],
      imports: [BbUIModule, ReactiveFormsModule],
      providers: [
        { provide: TransactionsService, useValue: TRANSACTIONS_SERVICE_MOCK },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferBoxFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
