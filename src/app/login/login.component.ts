import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  template: `
    <div>
      <form [formGroup]="loginForm" (ngSubmit)="submitForm()">
        <label for="username-id">Username: </label>
        <input formControlName="username" type="text" name="username" id="username-id">

        <label for="password-id">Password: </label>
        <input formControlName="password" type="password" name="password" id="password-id">


        <button [disabled]="loginForm.invalid" type="submit" id="login-button">Log in</button>
      </form>
    </div>
  `
})
export class LoginComponent {
  @Output() login: EventEmitter<any> = new EventEmitter();
  loginForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })


  submitForm(): void {
    if (this.loginForm.valid) {
      this.login.emit(this.loginForm.value)
    }
  }
}
