import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class Utils {

    public generatedForm: FormGroup = new FormGroup({}); 
    public generateFormGroup(formParams: string[]): any {
        formParams.forEach(item => {
            this.generatedForm.addControl(`${item}Ctrl`, new FormControl('', [
                Validators.required,
                Validators.pattern("[A-Za-z]*")
            ]));
        })
        return this.generatedForm;
    }
}