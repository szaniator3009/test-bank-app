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
  ],
  imports: [BrowserModule, BbUIModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
