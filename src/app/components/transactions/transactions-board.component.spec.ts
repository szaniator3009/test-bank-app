import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsBoardComponent } from './transactions-board.component';

describe('TransactionsComponent', () => {
  let component: TransactionsBoardComponent;
  let fixture: ComponentFixture<TransactionsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsBoardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
