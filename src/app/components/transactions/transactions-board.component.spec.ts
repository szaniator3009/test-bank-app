import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TRANSACTIONS_SERVICE_MOCK } from 'src/app/mock-services/transactionsService.mock.service';
import { FilterComponent } from 'src/bb-ui/components/filter/filter.component';
import { TransactionsService } from './services/transactions.service';

import { TransactionsBoardComponent } from './transactions-board.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';

describe('TransactionsComponent', () => {
  let component: TransactionsBoardComponent;
  let fixture: ComponentFixture<TransactionsBoardComponent>;
  let transactionsService: TransactionsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TransactionsBoardComponent,
        TransactionsListComponent,
        FilterComponent,
      ],
      providers: [
        { provide: TransactionsService, useValue: TRANSACTIONS_SERVICE_MOCK },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsBoardComponent);
    component = fixture.componentInstance;
    transactionsService = TestBed.inject(TransactionsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call transactions service', () => {
    let spyOnGetAccountsEvent = spyOn(
      transactionsService,
      'getAccountsEvents$'
    );
    component.ngOnInit();
    expect(spyOnGetAccountsEvent).toHaveBeenCalled();
  });
});
