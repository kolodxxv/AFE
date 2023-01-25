import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: UntypedFormGroup = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(
    private formBuilder: UntypedFormBuilder,
  ) { }

  onSubmit(): void {
    // Process login data here
    console.warn("Your loggin has been processed", 
                this.loginForm.value) 
    this.loginForm.reset();
  }

}
