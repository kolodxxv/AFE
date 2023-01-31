import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public items: any[] = ['Users', 'Tasks', 'Settings'];

  constructor(
    private router: Router
  ) { }

  public redirectToPageByItemName(content: string): void {
    this.router.navigate([content.toLowerCase()])
  }

  ngOnInit(): void {
  }

}
