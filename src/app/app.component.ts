import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

import {FormBuilder,Validators} from '@angular/forms';
import {AbstractControl} from '@angular/forms';
import {PasswordValidator} from './shared/password.validator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  
{

registrationForm: FormGroup;

get userName()
{
  return this.registrationForm.get('userName');
}

get email()
{
  return this.registrationForm.get('email');
}


  constructor(private fb: FormBuilder)
  {}

  ngOnInit()
  {
this.registrationForm= this.fb.group({
userName:['',[Validators.required,Validators.minLength(4)]],


password:[''],
confirmPassword:[''],
address:this.fb.group({
city: [''],
state:[''],
postalcode:[''],


})

},{validator: PasswordValidator});





  }





  /*registrationForm= this.fb.group({
userName:['',[Validators.required,Validators.minLength(4)]],
email: [''],
subscirbe: [false],
password:[''],
confirmPassword:[''],
address:this.fb.group({
city: [''],
state:[''],
postalcode:['']

})



  },{validator: PasswordValidator});*/








  /*registrationForm=new FormGroup({
    userName: new FormControl('Rushikesh'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    // mobileNumber: new FormControl('')

   address: new FormGroup({
    city: new FormControl(''),
    state: new FormControl(''),
    postalcode: new FormControl('')

   
    
  })
  });/*

  // If you want to set all FormControl values of form or you want to maintain form Structure of FormGroup then use setValue() method.
  // If you want to use few FormControl values of form like in following example if you don't want to use address field then use patchValue() menthod. 
  
 /* loadApiData()
  {
    this.registrationForm.setValue({

       userName: 'Rushikesh',
    password: 'test',
    confirmPassword:'test',
    address: {

      city: 'Mumbai',
      state: 'Maharashtra',
      postalcode:'123456'
    }

    })
  }*/

  onSubmit()
  {
    console.log(JSON.stringify(this.registrationForm.value));
  }

}
