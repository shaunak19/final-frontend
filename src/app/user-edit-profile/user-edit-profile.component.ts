import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {
  
  userForm: FormGroup;
  constructor(private router: Router,private userService: UserService) {
    this.userForm = new FormGroup({
      'userName': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'paddress': new FormControl('', [Validators.required]),
      'taddress': new FormControl('',[Validators.required]),
      'dob': new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  get f(){
    return this.userForm.controls;
  }

  submit(){
    const email = this.userForm.get('userEmail')?.value;
    this.userService.updateUserByEmail(email,this.userForm.value).subscribe(() => {
      alert("User Details Updated!");
      this.userForm.reset();
    })
  }

  generateUserDetails(){
    const email = this.userForm.get('userEmail')?.value;
    console.log(email);
    this.userService.getUserByEmail(email).subscribe((data) => {
      console.log(data);
      this.userForm.patchValue(data);
    },(err) => {
      console.log(err);
      alert(err.error.message);
      this.userForm.reset();
    })
  }

}
