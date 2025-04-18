import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-issuance',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './issuance.component.html',
  styleUrls: ['./issuance.component.css']
})
export class IssuanceComponent {
  issuanceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.issuanceForm = this.fb.group({
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^09(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|9[0-9])-?[0-9]{3}-?[0-9]{4}$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get phoneNumber() {
    return this.issuanceForm.get('phoneNumber');
  }

  get email() {
    return this.issuanceForm.get('email');
  }

  onSubmit() {
    if (this.issuanceForm.valid) {
      console.log('Form Submitted:', this.issuanceForm.value);
    }
  }
}