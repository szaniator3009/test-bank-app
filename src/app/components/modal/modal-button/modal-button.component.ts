import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
})
export class ModalButtonComponent {
  @Input() bgColor: string;
  @Input() class: string;
  @Input() text: string;
  @Output() handleClick: EventEmitter<() => void> = new EventEmitter<
    () => void
  >();

  onClick(): void {
    this.handleClick.emit();
  }
}
