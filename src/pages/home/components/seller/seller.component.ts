import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { IssuanceComponent } from '../../../../shared/components/issuance/issuance.component';
import { ChargingComponent } from '../../../../shared/components/charging/charging.component';

enum OperationStatus {
  Issuance,
  Charging
}

@Component({
  selector: 'app-seller',
  imports: [ NgClass, IssuanceComponent, ChargingComponent, NgIf],
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css'
})
export class SellerComponent {
  operationStatus: OperationStatus = OperationStatus.Issuance;
  operationStatusEnum = OperationStatus;
}
