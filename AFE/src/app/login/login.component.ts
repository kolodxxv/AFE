import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './shared/login.service';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


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

  ngOnInit(): void {
    const testObj: any = { id: 1, value: 'test', optionalOperator: 'Optional'};

    console.log(Object.keys(testObj));
    console.log(Object.values(testObj));
  }

  onSubmit(): void {
    // Process login data here
    // const { username, password } = this.loginForm.controls;
    this.loginSrvc.checkUserCredentials()
    .pipe(
      tap(() => this.router.navigate(['dashboard']))
    )
    .subscribe((token) => {
        localStorage.setItem('token', token)
        this.loginForm.reset();
      })
  }
}
