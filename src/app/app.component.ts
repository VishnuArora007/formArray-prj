import {Component, OnInit} from '@angular/core';
import {AppModel} from './app.model';
import {FormArray, FormBuilder, 
  FormControl, FormGroup, Validators} 
  from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  emailForm: FormGroup;
  nameForm: FormGroup;
  addressForm: FormGroup;
  constructor(private em: FormBuilder, private ad: FormBuilder) {}
  model = new AppModel ('', '');

  ngOnInit() {
    this.emailForm = this.em.group({ 'mail': ['',
   Validators.required],
        emails: this.em.array([this.Inemails()]),
    });
    this.nameForm = new FormGroup({
        'fname': new FormControl(null, Validators.required),
        'lname': new FormControl(null, Validators.required)
    });
    this.addressForm = this.ad.group({ 'addrs': ['', [Validators.required]],
        address: this.ad.array([this.Inaddress()]),
    });
  }
  Inemails() {
    return this.em.group({
        mail: ['']
    });
  }
  addNewEmail() {
    const control = <FormArray>this.emailForm.controls['emails'];
    control.push(this.Inemails());
  }

  deleteEmail(index: number) {
    const control = <FormArray>this.emailForm.controls['emails'];
    control.removeAt(index);
  }
  Inaddress() {
    return this.ad.group({
        address: ['']
    });
  }
  addNewAddress() {
    const control = <FormArray>this.addressForm.controls['address'];
    control.push(this.Inaddress());
  }
  deleteAddress(index: number) {
    const control = <FormArray>this.addressForm.controls['address'];
    control.removeAt(index);
  }
  
}




