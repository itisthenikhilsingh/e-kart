import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ CommonModule ,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  standalone:true
})
export class Register {
  userForm = new FormGroup({
    name : new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.email])
  })

  submitForm(){
    console.log(this.userForm.value);
  }

}
