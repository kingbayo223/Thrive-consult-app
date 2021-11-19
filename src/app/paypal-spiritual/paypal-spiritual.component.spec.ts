import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalSpiritualComponent } from './paypal-spiritual.component';

describe('PaypalSpiritualComponent', () => {
  let component: PaypalSpiritualComponent;
  let fixture: ComponentFixture<PaypalSpiritualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalSpiritualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalSpiritualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
