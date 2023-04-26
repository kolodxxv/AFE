import { Component, OnInit } from '@angular/core';
import { LanguageService } from './language.service';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AFE';

  constructor(
    private languageService: LanguageService,
    private translocoService: TranslocoService
  ) {}

  ngOnInit(): void {
    const currentLang: string = this.languageService.getLanguage();
    this.translocoService.setActiveLang(currentLang.toLowerCase())
  }
  
}
