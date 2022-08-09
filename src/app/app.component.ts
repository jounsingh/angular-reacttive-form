import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms"
import { PasswordChecker } from 'src/custom-validator/password-checked';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-reactive';
  registerForm:FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      acceptTmc:[false,Validators.requiredTrue]
    },{
      validators:PasswordChecker('password','confirmPassword')
    })
  }

  get f(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }

    console.table(this.registerForm.value)
    console.table(this.registerForm)

  }

  onReset(){
    this.submitted=false;
    this.registerForm.reset()
  }

}
