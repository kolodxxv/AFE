import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Subject } from 'rxjs';
import { UsersItem } from './shared/interfaces/interface';
import { UsersService } from './shared/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<UsersItem>;
  public dataSource: any;

  public displayedColumns = ['id', 'name', 'surname', 'country', 'city'];
  public showWizard: any = true;
  public inputSubject: Subject<any> = new Subject<any>;
  private destroy$: Subject<boolean> = new Subject<boolean>;
  
  constructor(
    private usersSvrc: UsersService,
    private router: Router
    
  ) {
   this.dataSource = this.usersSvrc.getListOfUsers();
    
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
  }

  public toggleWizard (e: boolean): void {
    this.showWizard = !e;
  }

  public showUserDataById(userData: any): void {
    this.router.navigate([`users/${userData.id}`])
  }

  public checkConditionFromChildComponent(tableData: string[]) : void {
    this.dataSource = tableData;
    this.showWizard = true;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
