import { DecimalPipe, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

enum ChargingMethodEnum {
  RIAL,
  TTR
}

@Component({
  selector: 'app-charging',
  imports: [ReactiveFormsModule, NgIf, NgClass, DecimalPipe],
  templateUrl: './charging.component.html',
  styleUrl: './charging.component.css'
})
export class ChargingComponent implements OnInit {
  activeTab: string = 'rial'; // Default tab
  rialForm!: FormGroup;
  ttrForm!: FormGroup;
  chargingMethod: ChargingMethodEnum = ChargingMethodEnum.RIAL;
  chargingMethods = ChargingMethodEnum;
  minimumRialAmount = 1000; // Example minimum amount for Rial
  minimumTtrAmount = 0.01; // Example minimum amount for TTR
  ttrAddress: string = 'TTR-ADDRESS-EXAMPLE-1234567890'; // Replace with your TTR address

  constructor(private fb: FormBuilder) {
    // Initialize the forms here if needed
  }

  ngOnInit() {
    this.rialForm = this.fb.group({
      transactionReceipt: [null, Validators.required],
    });

    this.ttrForm = this.fb.group({
      transactionHash: ['', Validators.required],
    });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  onSubmitRial() {
    if (this.rialForm.valid) {
      console.log('Rial Form Submitted:', this.rialForm.value);
    }
  }

  onSubmitTtr() {
    if (this.ttrForm.valid) {
      console.log('TTR Form Submitted:', this.ttrForm.value);
    }
  }

  changeChargingMethod(method: ChargingMethodEnum) {
    this.chargingMethod = method;
  }
}
