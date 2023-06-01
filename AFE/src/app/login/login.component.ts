import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './shared/login.service';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public languages: {id: string, displayLang: string}[] = [
    {id: 'en', displayLang: 'English'},
    {id: 'ru', displayLang: 'Русский'},

  ]
  public loginForm: FormGroup = this.formBuilder.group({
    username: '',
    password: '',
    language: ''
  });


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginSrvc: LoginService,
    private readonly languageService: LanguageService
    
  ) {}

  ngOnInit(): void {
    
    const { language } = this.loginForm.controls;

    this.languages.forEach(item => {
      if (item.id === this.languageService.getLanguage()) {
        language.setValue(item);
      } 
    })

    language.valueChanges.subscribe(lang => {
      this.languageService.setLanguage(lang.id);
    })


  }

  public onSubmit(): void {
    const { username, password } = this.loginForm.controls;

    if (this.loginSrvc.checkUserCredentials(username.value, password.value)) {
      this.loginSrvc.storeUserName(username.value)
      this.router.navigate(['dashboard'])
      this.loginForm.reset()
    }
  }
}
