import { Component, Input, OnInit } from '@angular/core';
import { AccountEvent } from 'src/app/models/account';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
})
export class ListItemComponent implements OnInit {
  @Input() item: AccountEvent;
  constructor() {}

  ngOnInit(): void {}
}
