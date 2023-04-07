import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  FormControl = FormControl;

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required)
    })
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value);
  }

  get firstName() {
    return this.form.get('firstName') as FormControl;
  }

  get lastName() {
    return this.form.get('lastName') as FormControl;
  }

  get address() {
    return this.form.get('address') as FormGroup;
  }

  get city() {
    return this.form.get('address')?.get('city') as FormControl;
  }

  get state() {
    return this.form.get('address')?.get('state') as FormControl;
  }
}
