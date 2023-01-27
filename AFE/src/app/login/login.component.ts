import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


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
  ) { }

  onSubmit(): void {
    // Process login data here
    console.warn("Your loggin has been processed", 
                this.loginForm.value) 
    this.loginForm.reset();
  }

}
