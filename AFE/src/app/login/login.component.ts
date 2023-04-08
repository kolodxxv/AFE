import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginSrvc: LoginService
  ) { }

  public onSubmit(): void {
    const { username, password } = this.loginForm.controls;

    if (this.loginSrvc.checkUserCredentials(username.value, password.value)) {
      this.loginSrvc.storeUserName(username.value)
      this.router.navigate(['dashboard'])
      this.loginForm.reset()
    }
  }
}
