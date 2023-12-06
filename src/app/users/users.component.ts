import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { UsersItem } from './shared/interfaces/interface';

import { TranslocoService } from '@ngneat/transloco';
import { LanguageService } from '../language.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public dataSource: any;
  public displayedColumns: string[] = ['id', 'name', 'surname', 'country', 'city', 'delete'];
  public showWizard: any = true;
  public inputSubject: Subject<any> = new Subject<any>;
  private destroy$: Subject<boolean> = new Subject<boolean>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<UsersItem>;
  
  constructor(
    private router: Router,
    private readonly langService: LanguageService,
    private readonly translocoService: TranslocoService,
    private dataSrvc: DataService
    
  ) { }

  ngOnInit() {
    this.dataSrvc.getData()
      .subscribe((res: any) => {
        this.dataSource = res.data;
        this.dataSource.sort = this.sort
    });
  }


  public toggleWizard (e: boolean): void {
    this.showWizard = !e;
  }

  public showUserDataById(userData: any): void {
    this.router.navigate([`users/${userData.id}`])
  }

  public checkConditionFromChildComponent() : void {
    
    this.showWizard = true;
  }

  public eraseUser(id: number) {
    this.dataSrvc.delUser(id).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
