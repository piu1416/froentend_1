import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustComponent } from './admincust.component';

describe('AdmincustComponent', () => {
  let component: AdmincustComponent;
  let fixture: ComponentFixture<AdmincustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
