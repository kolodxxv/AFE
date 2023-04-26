import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

import { IDashboardRoutes } from './shared/interface/enum';
import { LanguageService } from '../language.service';
import { TranslocoService } from '@ngneat/transloco';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  public items: any[] = [
    {id: 'Users', displayValue: this.translocoService.translate('users')},
    {id: 'Tasks', displayValue: this.translocoService.translate('tasks')},
    {id: 'Settings', displayValue: this.translocoService.translate('settings')}
  ];
  public boxState = false;
  IDashboardRoutes = IDashboardRoutes;

  constructor(
    private renderer: Renderer2, 
    private router: Router,
    private readonly langService: LanguageService,
    private readonly translocoService: TranslocoService
  ) {
   }

  public boxControlMethod(item: string): void {
    if(item === IDashboardRoutes.SETTINGS) {
      this.boxState = !this.boxState;
    } 
    if(item === IDashboardRoutes.USERS) {
      this.router.navigate(['users'])
    } 
    if(item === IDashboardRoutes.TASKS) {
      this.router.navigate(['tasks'])
    }
    
  }

  public darkMode(): void {
    const currentColor = document.body.style.backgroundColor;
    const newColor = currentColor === 'rgba(0, 0, 0, 0.7)' ? '#fff' : 'rgba(0, 0, 0, 0.7)';
    this.renderer.setStyle(document.body, 'background-color', newColor);
  }

}
