import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BbUIModule } from 'src/bb-ui/bb-ui.module';
import { SubmitButtonComponent } from 'src/bb-ui/components/submit-button/submit-button.component';

import { TransferBoxFormComponent } from './transfer-box-form.component';

describe('TransferBoxFormComponent', () => {
  let component: TransferBoxFormComponent;
  let fixture: ComponentFixture<TransferBoxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferBoxFormComponent, SubmitButtonComponent],
      imports: [BbUIModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferBoxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
