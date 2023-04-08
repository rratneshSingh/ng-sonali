import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  FormControl = FormControl;

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, this.emailValidation]),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required)
    }),
    skills: new FormArray([])
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
   this.firstName?.valueChanges.subscribe((v)=>{
      if ( v === this.lastName.value ) {
        const r = this.lastName.getError('required');
        this.lastName.setErrors({
          required: r
        })
      } else {
        this.lastName.setErrors({
          mismatch: true
        });
      }
    })

    this.lastName?.valueChanges.subscribe((v)=>{
      if ( v === this.firstName.value ) {
        const r = this.lastName.getError('required');
        this.lastName.setErrors({
          required: r
        })
      } else {
        this.lastName.setErrors({
          mismatch: true
        });
      }
    })
  }

  emailValidation(control: AbstractControl) {
    const res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value)
    return res ? null : {
      customEmail: true
    }
  }

  addSkill() {
    (this.form.get('skills') as FormArray).push(new FormGroup({
      title: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required)
    }))
  }

  removeSkill(i: number) {
    (this.form.get('skills') as FormArray).removeAt(i);
  }

  submit() {
    console.log(this.form.value);
  }

  get email() {
    return this.form.get('email') as FormControl;
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

  get skills() {
    return this.form.get('skills') as FormArray;
  }
}
