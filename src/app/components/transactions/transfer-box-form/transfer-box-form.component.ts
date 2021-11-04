import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TransferBoxFormService } from './services/TransferBoxFormService.service';

@Component({
  selector: 'app-transfer-box-form',
  templateUrl: './transfer-box-form.component.html',
  styleUrls: ['./transfer-box-form.component.css'],
})
export class TransferBoxFormComponent implements OnInit {
  form: FormGroup;

  constructor(private transferBoxFormService: TransferBoxFormService) {}

  ngOnInit(): void {
    this.form = this.transferBoxFormService.getForm();
  }

  submitForm(): void {
    console.log(this.form.getRawValue());
  }
}
