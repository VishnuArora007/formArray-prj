import {Component, OnInit} from '@angular/core';
import {AppModel} from './app.model';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  public emailForm: FormGroup;
  constructor(private em: FormBuilder){}
  model = new AppModel ('', '');

  ngOnInit() {
    this.emailForm = this.em.group({
        emails: this.em.array([this.Inemails()])
    });
  }
  Inemails(){
    return this.em.group({
        mail: ['']
    });
  }
  addNewEmail(){
    const control = <FormArray>this.emailForm.controls['emails'];
    control.push(this.Inemails());
  }

  deleteEmail(index: number){
    const control = <FormArray>this.emailForm.controls['emails'];
    control.removeAt(index);
  }
}

