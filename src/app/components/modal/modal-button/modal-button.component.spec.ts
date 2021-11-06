import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalButtonComponent } from './modal-button.component';

describe('ModalButtonComponent', () => {
  let component: ModalButtonComponent;
  let fixture: ComponentFixture<ModalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onClick', () => {
    it('should emit', () => {
      const spyOnEmit = spyOn(component.handleClick, 'emit');
      component.onClick();
      expect(spyOnEmit).toHaveBeenCalled();
    });
  });
});
