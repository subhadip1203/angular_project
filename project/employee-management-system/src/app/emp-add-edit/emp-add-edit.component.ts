import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {

  empForm : FormGroup

  constructor(private _formBuilder: FormBuilder) {
    this.empForm = this._formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      dob:'',
      gender: '',
      education:'',
      company: '',
    })
  }

  onFromSubmit(){
    console.log(this.empForm.value);
  }


}
