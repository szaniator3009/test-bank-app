import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TRANSACTIONS_SERVICE_MOCK } from 'src/app/mock-services/transactionsService.mock.service';
import { BoxHeaderComponent } from 'src/app/shared/components/box-header/box-header.component';
import { TransactionsService } from '../services/transactions.service';
import { ListItemComponent } from './list-item/list-item.component';

import { TransactionsListComponent } from './transactions-list.component';

describe('TransactionsListComponent', () => {
  let component: TransactionsListComponent;
  let fixture: ComponentFixture<TransactionsListComponent>;
  let transactionsService: TransactionsService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TransactionsListComponent,
        ListItemComponent,
        BoxHeaderComponent,
      ],
      providers: [
        { provide: TransactionsService, useValue: TRANSACTIONS_SERVICE_MOCK },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsListComponent);
    component = fixture.componentInstance;
    transactionsService = TestBed.inject(TransactionsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInit', () => {
    it('should call transactions service', () => {
      let spyOnGetAccountsEvent = spyOn(
        transactionsService,
        'getAccountsEvents$'
      );
      component.ngOnInit();
      expect(spyOnGetAccountsEvent).toHaveBeenCalled();
    });
  });
});
