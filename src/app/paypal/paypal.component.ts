import { Component, OnInit } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  constructor() {
    render({
      id:"#PayPaLlinks",
      currency:"NGN",
      value: "100",
      onApprove:(details)=>{
        alert("Transactions successfull");
      }
    })
   }

  ngOnInit(): void {
  }

}
