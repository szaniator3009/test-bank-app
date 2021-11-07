import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountEventTransaction } from '../../transactions/transfer-box-form/services/transferBoxFormService.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  @Input() accountEvent: AccountEventTransaction;
  @Output() onClick: EventEmitter<() => void> = new EventEmitter();

  handleClick(): void {
    this.onClick.emit();
  }
}
