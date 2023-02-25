import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UsersItem } from './shared/interfaces/interface';
import { UsersService } from './shared/users.service';

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

  public disableSurnameControl: boolean = true;

  
  constructor(
    private usersSvrc: UsersService
  ) {
   this.dataSource = this.usersSvrc.getListOfUsers()
    
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  public toggleWizard (e: boolean): void {
    this.showWizard = !e;
  }

  public checkConditionFromChildComponent(tableData: any) : void {
    this.dataSource = tableData;
    this.showWizard = true;
  }
}
