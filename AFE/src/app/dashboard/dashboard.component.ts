import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

import { IDashboardRoutes } from './shared/interface/enum';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  public items: string[] = ['Users', 'Tasks', 'Settings'];
  public boxState = false;
  IDashboardRoutes = IDashboardRoutes;

  constructor(
    private renderer: Renderer2, 
    private router: Router
  ) { }

  public boxControlMethod(item: string): void {
    if(item === IDashboardRoutes.SETTINGS) {
      this.boxState = !this.boxState;
    } else if(item === IDashboardRoutes.USERS) {
      this.router.navigate(['users'])
    } else {
      this.router.navigate(['tasks'])
    }
    
  }

  public darkMode(): void {
    const currentColor = document.body.style.backgroundColor;
    const newColor = currentColor === 'rgba(0, 0, 0, 0.7)' ? '#fff' : 'rgba(0, 0, 0, 0.7)';
    this.renderer.setStyle(document.body, 'background-color', newColor);
  }

}
