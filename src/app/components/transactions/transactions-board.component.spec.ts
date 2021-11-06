import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { of } from 'rxjs';
import { TRANSACTIONS_SERVICE_MOCK } from 'src/app/mock-services/transactionsService.mock.service';
import { AccountEvents } from 'src/app/models/account';
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

  it('should call transactions service with no transactions', fakeAsync(() => {
    let mockAccountEvents: AccountEvents = { data: [] };
    spyOn(transactionsService, 'getAccountsEvents$').and.returnValue(
      of(mockAccountEvents)
    );
    component.ngOnInit();
    tick(2000);
    expect(mockAccountEvents.data.length).toEqual(0);
  }));

  it('should call transactions service with some transactions', fakeAsync(() => {
    let mockAccountEvents: AccountEvents = {
      data: [
        { merchant: { name: 'test1' } },
        { merchant: { name: 'test2' } },
        { merchant: { name: 'test3' } },
      ],
    };
    spyOn(transactionsService, 'getAccountsEvents$').and.returnValue(
      of(mockAccountEvents)
    );
    component.ngOnInit();
    tick(2000);
    expect(mockAccountEvents.data.length).toEqual(3);
  }));
});
