import { Component, Input, Output, TemplateRef, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersItem } from '../../shared/interfaces/interface';



@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() disableSurnameControl: boolean = true;
  @Input() displayedColumns: any;
  @Input() dataSource: UsersItem[] = [];
  @Output() checkConditionFromChildComponent: EventEmitter<any> = new EventEmitter<any> ()

  constructor(
  ) {

  }

  userInfoGroup = new FormGroup({
    nameCtrl: new FormControl(''),
    surnameCtrl: new FormControl(''),
    countryCtrl: new FormControl(''),
    cityCtrl: new FormControl(''),
  });
  
  newUser: any = [];

  ngOnInit(): void {
    console.log(this.displayedColumns)
    console.log(this.disableSurnameControl)
    // this.userInfoGroup.controls.surnameCtrl.disable();
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

    this.dataSource.push(this.newUser)
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
