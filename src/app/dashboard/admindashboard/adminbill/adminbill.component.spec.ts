import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbillComponent } from './adminbill.component';

describe('AdminbillComponent', () => {
  let component: AdminbillComponent;
  let fixture: ComponentFixture<AdminbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
