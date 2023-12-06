import { Component, Input, Output, TemplateRef, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, debounceTime, Observable, Subject, tap, map } from 'rxjs';

import { DataService } from 'src/app/shared/data.service';
import { UsersItem } from '../../shared/interfaces/interface';
import { UsersService } from '../../shared/users.service';
import { Utils } from 'src/app/utils/utils';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})

export class StepperComponent implements OnInit {

  @Input() displayedColumns: any;
  @Input() inputSubject: Subject<any> = new Subject<any>();

  @Input() dataSource: Observable<any> = new Observable<any>();
  @Input() buttonNextDisabled: boolean = false;
  @Output() checkConditionFromChildComponent: EventEmitter<any> = new EventEmitter<any> ()

  public userInfoGroup: FormGroup = new FormGroup({});
  public newUser: any = [];

  constructor(
    private userSrvc: UsersService,
    private utils: Utils,
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    
    const formControls: string[] = ['name', 'surname', 'country', 'city'];
    this.userInfoGroup = this.utils.generateFormGroup(formControls);
    //  @ts-ignore
    this.userInfoGroup?.get('nameCtrl').valueChanges.subscribe(item =>{
      this.inputSubject.next(item);
    })
  }


  public onSubmit(): void {

    // Passing new user info into the table
    const {nameCtrl, surnameCtrl, countryCtrl, cityCtrl } = this.userInfoGroup.controls
    this.newUser = {
      name: nameCtrl.value, 
      surname: surnameCtrl.value,
      country: countryCtrl.value,
      city: cityCtrl.value
      }

    this.dataService.addUser(this.newUser).subscribe();            
    this.checkConditionFromChildComponent.emit(this.newUser);
    
  }

  // private generateMaxId(data:any): number {
  //   let arrayId: number[] = [];
  //   for (let i = 0; i < data.length; i++) {
  //     arrayId.push(data[i].id)
  //   }
  //   return arrayId[arrayId.length - 1] + 1
  // }
  
}
