import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaymentsInBillComponent } from './update-payments-in-bill.component';

describe('UpdatePaymentsInBillComponent', () => {
  let component: UpdatePaymentsInBillComponent;
  let fixture: ComponentFixture<UpdatePaymentsInBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePaymentsInBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaymentsInBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
