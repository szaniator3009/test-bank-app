import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BbUIModule } from 'src/bb-ui/bb-ui.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TransactionsBoardComponent } from './components/transactions/transactions-board.component';
import { TransferBoxComponent } from './components/transactions/transfer-box/transfer-box.component';
import { BoxHeaderComponent } from './shared/components/box-header/box-header.component';
import { TransferBoxFormComponent } from './components/transactions/transfer-box-form/transfer-box-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransactionsListComponent } from './components/transactions/transactions-list/transactions-list.component';
import { ListItemComponent } from './components/transactions/transactions-list/list-item/list-item.component';
import {
  ConfirmBoxConfigModule,
  DialogConfigModule,
  NgxAwesomePopupModule,
  ToastNotificationConfigModule,
} from '@costlydeveloper/ngx-awesome-popup';
import { ModalComponent } from './components/modal/modal.component';
import { ModalButtonComponent } from './components/modal/modal-button/modal-button.component';
import { DialogComponent } from './components/modal/dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransactionsBoardComponent,
    TransferBoxComponent,
    BoxHeaderComponent,
    TransferBoxFormComponent,
    TransactionsListComponent,
    ListItemComponent,
    ModalComponent,
    ModalButtonComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    BbUIModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxAwesomePopupModule.forRoot({
      ColorList: {
        Success: '#3caea3', // optional
        Info: '#2f8ee5', // optional
        Warning: '#ffc107', // optional
        Danger: '#e46464', // optional
      },
    }),
    ConfirmBoxConfigModule.forRoot(),
    DialogConfigModule.forRoot(),
    ToastNotificationConfigModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
