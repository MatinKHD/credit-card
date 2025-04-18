import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ChargingComponent } from '../../../../shared/components/charging/charging.component';
import { NgClass } from '@angular/common';

enum CardStatusEnum {
  Issued,
  Issuing,
  NotIssued
}

@Component({
  selector: 'app-client',
  imports: [RouterModule, ChargingComponent, NgClass],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  id: string | null = null;

  cardStatus: CardStatusEnum = CardStatusEnum.NotIssued;
  cardStatusEnum = CardStatusEnum;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  handleSmapleRouting(param: string) {
    this.router.navigate(['/home/client' + '/' + param]);
  }

  connectToApplePay() {
    console.log('Connecting to Apple Pay...');
    // Add logic to connect the VISA card to Apple Pay
  }

  connectToGooglePay() {
    console.log('Connecting to Google Pay...');
    // Add logic to connect the VISA card to Google Pay
  }

}
