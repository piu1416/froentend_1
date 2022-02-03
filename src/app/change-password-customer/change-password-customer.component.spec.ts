import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordCustomerComponent } from './change-password-customer.component';

describe('ChangePasswordCustomerComponent', () => {
  let component: ChangePasswordCustomerComponent;
  let fixture: ComponentFixture<ChangePasswordCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
