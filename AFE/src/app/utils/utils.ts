import { Injectable } from "@angular/core";
import { Form, FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class Utils {

  public generatedForm: FormGroup = new FormGroup({}); 
  public generateFormGroup(formParams: string[]): FormGroup {
    formParams.forEach(item => {
      this.generatedForm.addControl(`${item}Ctrl`, new FormControl('', [
          Validators.required,
          Validators.pattern("[A-Za-z\u0401\u0451\u0410-\u044f]*")
      ]));
    })
    return this.generatedForm;
  }
}