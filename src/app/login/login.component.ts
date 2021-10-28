import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from '../modal';
import { RegisterLoginService } from '../register-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm:FormGroup;
  constructor(private router: Router,private RegisterLoginService: RegisterLoginService) { 
    this.userForm = new FormGroup({
      'userEmail': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(40)]),
      'type': new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }
  submit(){

    if(this.userForm.valid){
      this.RegisterLoginService.loginUser(this.userForm.value).subscribe((data:any) =>{
        //console.log(data);
        window.localStorage.setItem("access_token",data.token)

        if(this.userForm.value.type === 'user')
          this.router.navigate(['sidebar/dashboard']);
        else
          this.router.navigate(['sidebar-admin/dashboard-admin']);
      },(err) => {
        console.log(err);
        alert(err.error.message);
      })

    }else{
      alert("Please enter valid details!");
    }
    
  }
}
