import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


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
  ) { }

  onSubmit(): void {
    // Process login data here
    const { username, password } = this.loginForm.controls;
    if (username?.value && password?.value) {
      this.router.navigate(['dashboard'])
      this.loginForm.reset();
    }
    
  }

}
