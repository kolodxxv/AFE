import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BehaviorSubject, filter, Observable, Subject, takeUntil } from 'rxjs';
import { UsersItem } from './shared/interfaces/interface';
import { UsersService } from './shared/users.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { map, catchError } from 'rxjs/operators';

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
  public buttonNextDisabled: boolean = false;
  private destroy$: Subject<boolean> = new Subject<boolean>;

  public mySubject: Subject<number> = new Subject<number>;




  public testArr: any[] = [1, 2, 3, 4, 5, 6]

  
  constructor(
    private usersSvrc: UsersService,
    private snackBar: MatSnackBar
  ) {
   
    
  }

  ngOnInit() {
    this.usersSvrc.getListOfUsers()
      .pipe(
        map(items => {
          return items.filter((val: any) => {
            return val.id != 0;
          })
        }),
        map(data => this.dataSource = data),
        takeUntil(this.destroy$)
      )
      .subscribe()
  }
    



  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;

    this.inputSubject
      .pipe(
        takeUntil(this.destroy$),
      )
      // .subscribe(val =>{
      //   val.match(/[0-9]/) ? (
      //     this.snackBar.open('Error'),
      //     this.buttonNextDisabled = true
      //   ) : (
      //       this.snackBar.dismiss(),
      //       this.buttonNextDisabled = false)
      //   });
      }

  public toggleWizard (e: boolean): void {
    this.showWizard = !e;
  }

  public checkConditionFromChildComponent(tableData: any) : void {
    this.dataSource = tableData;
    this.showWizard = true;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  
}
