import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalMarriageComponent } from './paypal-marriage.component';

describe('PaypalMarriageComponent', () => {
  let component: PaypalMarriageComponent;
  let fixture: ComponentFixture<PaypalMarriageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalMarriageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalMarriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
