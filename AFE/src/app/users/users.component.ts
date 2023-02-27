import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UsersItem } from './shared/interfaces/interface';
import { UsersService } from './shared/users.service';
import { MatSnackBar } from '@angular/material/snack-bar'

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

  public inputSubject: Subject<any> = new Subject<any>;
  // public getUserName$: Observable<any> = this.inputSubject.asObservable();



  
  constructor(
    private usersSvrc: UsersService,
    private snackBar: MatSnackBar
  ) {
   this.dataSource = this.usersSvrc.getListOfUsers()
    
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;

    this.inputSubject.subscribe(val =>{
      val.match(/[0-9]/) ? this.snackBar.open('Error') : this.snackBar.dismiss();
      })
    }

  public toggleWizard (e: boolean): void {
    this.showWizard = !e;
  }

  public checkConditionFromChildComponent(tableData: any) : void {
    this.dataSource = tableData;
    this.showWizard = true;
  }
}
