import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class TransferBoxFormService {
  constructor(private fb: FormBuilder) {}

  getForm(): FormGroup {
    const formGroup: FormGroup = this.fb.group({
      toAccount: [null],
      amount: [
        null,
        [
          Validators.required,
          Validators.min(0),
          Validators.max(500),
          Validators.pattern(/^\d+\.\d{2}$/),
        ],
      ],
    });

    return formGroup;
  }
}
