import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    usernname: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    // Process login data here
    console.warn("Your loggin ha been processed", 
                this.loginForm.value) 
    this.loginForm.reset();
  }

}
