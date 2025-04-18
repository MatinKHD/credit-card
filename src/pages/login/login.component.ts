import { Component } from '@angular/core';
import { CodeInputModule } from 'angular-code-input';
import {LocalRepository } from '../../core/local-repository'
import { NgClass, NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReplaceNumberPipe } from '../../shared/pipes/replace-number.pipe';
import { Router } from '@angular/router';

enum LogInStatus {
  phoneNumber,
  otp
}

@Component({
  selector: 'app-login',
  imports: [
    CodeInputModule, NgIf, ReactiveFormsModule, NgClass
  ],
  providers: [ReplaceNumberPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  verifyCode: string = '';
  isInBrowser: boolean = true;

  loginStatus: LogInStatus = LogInStatus.phoneNumber;
  loginStatusEnum = LogInStatus;

  phoneNumberControl: FormControl = new FormControl('', { validators: [Validators.required, Validators.pattern("^09(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|9[0-9])-?[0-9]{3}-?[0-9]{4}$")], updateOn: 'change' });

  get phoneNumberControlValue() { return this.phoneNumberControl.value; }


  constructor(
    private _repo: LocalRepository,
    private replaceNumberpipe: ReplaceNumberPipe,
    private router: Router
  ) {
    this.isInBrowser = this._repo.IsInBrowser;
  }

  confirmVerifyCode() {
    console.log(this.verifyCode);
    
  }

  replaceNumber() {
    const phoneNumber = this.replaceNumberpipe.transform(this.phoneNumberControl.value);
    this.phoneNumberControl.setValue(phoneNumber);
  }

  handleLogin(loginStatus: LogInStatus) {
    if(loginStatus == LogInStatus.phoneNumber) {
      this.loginStatus = LogInStatus.otp;
      
    } else if(this.verifyCode === '1111') {
      this.router.navigate(['/home']);
    }
    
  }

}
