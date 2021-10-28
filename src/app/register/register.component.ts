import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from 'src/utils/validation';
import { RegisterLoginService } from '../register-login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  constructor(private router: Router,private RegisterLoginService:RegisterLoginService) {
    this.userForm = new FormGroup({
      'userName': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'paddress': new FormControl('', [Validators.required]),
      'taddress': new FormControl('',[Validators.required]),
      'dob': new FormControl('', [Validators.required]),
      'password': new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(40)]),
      'confirmPassword': new FormControl('', [Validators.required])
    },{
      validators: [Validation.match('password', 'confirmPassword')]
    })
  }

  ngOnInit(): void {
  }

  get f(){
    return this.userForm.controls;
  }

  submit(){

    if(this.userForm.valid){
      this.RegisterLoginService.registerUser(this.userForm.value,"user").subscribe(() => {
        alert("User Created Successfully");
        this.router.navigate(['']);
      },(err) => {
        console.log(err);
        alert(err.error.message);
      })
    }else{
      alert("Please enter a valid form!");
    }
    
  }

}
