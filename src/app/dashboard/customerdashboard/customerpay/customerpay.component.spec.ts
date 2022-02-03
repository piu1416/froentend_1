import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerpayComponent } from './customerpay.component';

describe('CustomerpayComponent', () => {
  let component: CustomerpayComponent;
  let fixture: ComponentFixture<CustomerpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
