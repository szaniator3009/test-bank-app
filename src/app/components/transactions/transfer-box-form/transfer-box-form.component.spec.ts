import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BbUIModule } from 'src/bb-ui/bb-ui.module';
import { SubmitButtonComponent } from 'src/bb-ui/components/submit-button/submit-button.component';
import { TransactionsService } from '../services/transactions.service';
import { TransferBoxFormService } from './services/transferBoxFormService.service';
import { TransferBoxFormComponent } from './transfer-box-form.component';
import { TRANSACTIONS_SERVICE_MOCK } from '../../../mock-services/transactionsService.mock.service';
import { TRANSFER_BOX_FORM_SERVICE } from '../../../mock-services/transferBoxFormService.mock.service';
import { of } from 'rxjs';
describe('TransferBoxFormComponent', () => {
  let component: TransferBoxFormComponent;
  let fixture: ComponentFixture<TransferBoxFormComponent>;
  let transferBoxFormService: TransferBoxFormService;
  let transactionsService: TransactionsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferBoxFormComponent, SubmitButtonComponent],
      imports: [BbUIModule, ReactiveFormsModule],
      providers: [
        {
          provide: TransferBoxFormService,
          sueValue: TRANSFER_BOX_FORM_SERVICE,
        },
        { provide: TransactionsService, useValue: TRANSACTIONS_SERVICE_MOCK },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferBoxFormComponent);
    component = fixture.componentInstance;
    transferBoxFormService = TestBed.inject(TransferBoxFormService);
    transactionsService = TestBed.inject(TransactionsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInit', () => {
    it('should call transferBoxFormService on init', () => {
      let spyOnGetForm = spyOn(transferBoxFormService, 'getForm');
      fixture = TestBed.createComponent(TransferBoxFormComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(spyOnGetForm).toHaveBeenCalled();
    });

    it('should call transactionsService with getAccountBalance  on init', () => {
      let spyOnGetAccountBalance = spyOn(
        transactionsService,
        'getAccountBalance$'
      );
      fixture = TestBed.createComponent(TransferBoxFormComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(spyOnGetAccountBalance).toHaveBeenCalled();
    });

    it('should call transferBoxFormService with getIsConfirmed on init', () => {
      let spyOnGetIsConfirmed = spyOn(
        transferBoxFormService,
        'getIsConfirmed$'
      ).and.returnValue(of(false));
      fixture = TestBed.createComponent(TransferBoxFormComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(spyOnGetIsConfirmed).toHaveBeenCalled();
    });

    it('should reset for when isConfirmed is true', () => {
      let spyOnGetIsConfirmed = spyOn(
        transferBoxFormService,
        'getIsConfirmed$'
      ).and.returnValue(of(true));
      fixture = TestBed.createComponent(TransferBoxFormComponent);
      component = fixture.componentInstance;
      let builder = new FormBuilder();
      let form = builder.group({
        toAccount: ['test account', Validators.required],
        amount: [
          'test amount',
          [Validators.required, Validators.min(1), Validators.max(500)],
        ],
      });
      spyOn(transferBoxFormService, 'getForm').and.returnValue(form);
      component.ngOnInit();
      expect(spyOnGetIsConfirmed).toHaveBeenCalled();
      expect(component.form.get('test amount')).toEqual(null);
    });

    it('should not reset for when isConfirmed is false', () => {
      let spyOnGetIsConfirmed = spyOn(
        transferBoxFormService,
        'getIsConfirmed$'
      ).and.returnValue(of(false));
      fixture = TestBed.createComponent(TransferBoxFormComponent);
      component = fixture.componentInstance;
      let builder = new FormBuilder();
      let mockAmount: string = 'test amount';
      let form = builder.group({
        toAccount: ['test account', Validators.required],
        amount: [
          'test amount',
          [Validators.required, Validators.min(1), Validators.max(500)],
        ],
      });
      spyOn(transferBoxFormService, 'getForm').and.returnValue(form);
      component.ngOnInit();
      expect(spyOnGetIsConfirmed).toHaveBeenCalled();
      expect(component.form.get('amount').value).toEqual(mockAmount);
    });
  });
});
