import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferBoxFormComponent } from './transfer-box-form.component';

describe('TransferBoxFormComponent', () => {
  let component: TransferBoxFormComponent;
  let fixture: ComponentFixture<TransferBoxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferBoxFormComponent ]
    })
    .compileComponents();
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
