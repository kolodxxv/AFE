import { Component } from '@angular/core';
import { TasksService } from './service/tasks-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [TasksService]
})
export class TasksComponent {

public storageName = localStorage.getItem('username');
public dataSource: any;
public classControl = new FormControl();

public statusList = ['To DO', 'QA', 'Done', 'Working On']
public selectedValue: any;

 constructor(
  private tasksSrvc: TasksService
 ) {
  this.dataSource = tasksSrvc.getUserTasks()
  
  }


}
