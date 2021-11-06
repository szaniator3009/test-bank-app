// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { TransactionsService } from '../transactions/services/transactions.service';
// import { TransferBoxFormService } from '../transactions/transfer-box-form/services/TransferBoxFormService.service';
// import { ModalComponent } from './modal.component';
// import { DialogBelongingMock } from '../../mock-services/dialogBelonging.mock';
// import { TransferBoxFormServiceMock } from '../../mock-services/transferBoxFormService.mock.service';
// import { TransactionsServiceMock } from '../../mock-services/transactionsService.mock.service';
// import { DialogBelonging } from '@costlydeveloper/ngx-awesome-popup';

// describe('ModalComponent', () => {
//   let component: ModalComponent;
//   let fixture: ComponentFixture<ModalComponent>;
//   let dialogBelonging: DialogBelonging;
//   let transferBoxFormService: TransferBoxFormService;
//   let transactionsService: TransactionsService;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ModalComponent],
//       providers: [
//         { provide: DialogBelonging },
//         {
//           provide: TransferBoxFormService,
//           useValue: TransferBoxFormServiceMock,
//         },
//         {
//           provide: TransactionsService,
//           useValue: TransactionsServiceMock,
//         },
//       ],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ModalComponent);
//     component = fixture.componentInstance;
//     dialogBelonging = TestBed.inject(DialogBelonging);
//     transferBoxFormService = TestBed.inject(TransferBoxFormService);
//     transactionsService = TestBed.inject(TransactionsService);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
