import { Component, Input } from '@angular/core';
import { AccountEvent } from 'src/app/models/account';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
})
export class ListItemComponent {
  @Input() item: AccountEvent;
}
