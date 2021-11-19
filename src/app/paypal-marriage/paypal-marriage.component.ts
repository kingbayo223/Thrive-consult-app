import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-paypal-marriage',
  templateUrl: './paypal-marriage.component.html',
  styleUrls: ['./paypal-marriage.component.css']
})
export class PaypalMarriageComponent implements OnInit {

  constructor() {
    render({
      id:"#PayPaLlinks",
      currency:"NGN",
      value: "1",
      onApprove:(details)=>{
        alert("Transactions successfull");
      }
    })
   }

  ngOnInit(): void {
  }

}
