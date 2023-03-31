import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public items: any[] = ['Users', 'Tasks', 'Settings'];
  public boxState = false;

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef
  ) { }

  ngOnInit(): void {
  }

  boxControlMethod() {
    this.boxState = !this.boxState;
  }

  darkMode(event: any) {
    const currentColor = document.body.style.backgroundColor;
    const newColor = currentColor === 'rgba(0, 0, 0, 0.7)' ? '#fff' : 'rgba(0, 0, 0, 0.7)';
    this.renderer.setStyle(document.body, 'background-color', newColor);
  }

}
