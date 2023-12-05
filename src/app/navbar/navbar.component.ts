import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LanguageService } from '../language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public languages: {id: string, displayLang: string}[] = [
    {id: 'en', displayLang: 'English'},
    {id: 'ru', displayLang: 'Русский'},
  ]

  public loginForm: FormGroup = this.formBuilder.group({
    language: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private readonly languageService: LanguageService,
    public router: Router
  ) { }

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

}
