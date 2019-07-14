import { Component, OnInit } from '@angular/core';
import {FormBuilder } from '@angular/forms';
import {Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.css']
})
export class DataentryComponent implements OnInit {
  profilename=this.fb.group({
    firstname:['',[Validators.required, Validators.minLength(6)]],
    address:['',[Validators.required, Validators.minLength(6)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required, Validators.minLength(6)]],
    confirmpassword:['']
  })
  submitted=false;

  constructor(private fb: FormBuilder,private router:Router) { }

  onSubmit1(password,confirmpassword){
    if(this.profilename.value.password == this.profilename.value.confirmpassword)
    alert('Connected you can register')
    else
    alert('Enter correct password ')

  }


  get f() { return this.profilename.controls; }
  onSubmit(){
  this.submitted=true;

  // stop here if form is invalid
  if (this.profilename.invalid) {
    return;
}
alert('SUCCESS!!')
console.log(this.profilename.value)
}

  ngOnInit() {
  }

}
