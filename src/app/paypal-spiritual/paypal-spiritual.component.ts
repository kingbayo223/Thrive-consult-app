import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-paypal-spiritual',
  templateUrl: './paypal-spiritual.component.html',
  styleUrls: ['./paypal-spiritual.component.css']
})
export class PaypalSpiritualComponent implements OnInit {

  constructor() {
    render({
      id:"#PayPaLlinks",
      currency:"NGN",
      value: "200",
      onApprove:(details)=>{
        alert("Transactions successfull");
      }
    })
   }

  ngOnInit(): void {
  }

}
