import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbillComponent } from './customerbill.component';

describe('CustomerbillComponent', () => {
  let component: CustomerbillComponent;
  let fixture: ComponentFixture<CustomerbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
