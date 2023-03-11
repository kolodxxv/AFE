import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, TemplateRef, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, Observable, Subject } from 'rxjs';
import { UsersItem } from '../../shared/interfaces/interface';
import { UsersService } from '../../shared/users.service';



@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() disableSurnameControl: boolean = true;
  @Input() displayedColumns: any;
  @Input() inputSubject: Subject<any> = new Subject<any>();

  @Input() dataSource: UsersItem[] = [];
  @Input() buttonNextDisabled: boolean = false;
  @Output() checkConditionFromChildComponent: EventEmitter<any> = new EventEmitter<any> ()

  constructor(
    private userSrvc: UsersService
  ) {

  }

  userInfoGroup : FormGroup = new FormGroup({

    nameCtrl: new FormControl('', [
              Validators.required,
              Validators.pattern("[A-Za-z]*")
            ]),
    surnameCtrl: new FormControl('', [
                Validators.required,
                Validators.pattern("[A-Za-z]*")
            ]),
    countryCtrl: new FormControl('', [
                Validators.required,
                Validators.pattern("[A-Za-z]*")
            ]),
    cityCtrl: new FormControl('', [
                Validators.required,
                Validators.pattern("[A-Za-z]*")
            ]),
  });
  
  public newUser: any = [];

  ngOnInit(): void {
    
    this.userInfoGroup.controls['nameCtrl'].valueChanges
      .pipe(
        debounceTime(400)
      )
      .subscribe(item =>{
        console.log(item)
        this.inputSubject.next(item);
      
    })
  }


  onSubmit() {
    console.log(this.dataSource)
    // Passing new user info into the table
    const {nameCtrl, surnameCtrl, countryCtrl, cityCtrl } = this.userInfoGroup.controls
    this.newUser = {
                    id: this.generateMaxId(this.dataSource),
                    name: nameCtrl.value, 
                    surname: surnameCtrl.value,
                    country: countryCtrl.value,
                    city: cityCtrl.value
                  }

    this.dataSource.push(this.newUser);
    this.userSrvc.createUser(this.newUser);
    this.checkConditionFromChildComponent.emit(this.dataSource);
    
  }

  generateMaxId(data:any): number {
    // console.log(data)
    let arrayId: number[] = [];
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i].id)
      arrayId.push(data[i].id)

      
    }
    // console.log(arrayId)
    // console.log(arrayId[arrayId.length])
    return arrayId[arrayId.length - 1] + 1
  }
  
}
