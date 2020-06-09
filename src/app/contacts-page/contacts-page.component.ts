import {Component, Input} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AppComponent } from '../app.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent{
  nameFormControl = new FormControl('', [Validators.required]);
  areaFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();


  constructor(public appcom: AppComponent) {
    
  }

  log = function(par) {console.log(par)};


}

