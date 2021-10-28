import { Injectable } from '@angular/core';
import { LoginUser, User } from './modal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {

  constructor(private http:HttpClient) { }

  registerUser(data:User,type:string){
    return this.http.post(`https://final-project-chubb.herokuapp.com/user/register/${type}`,data);
  }

  loginUser(data:LoginUser){
    return this.http.post(`https://final-project-chubb.herokuapp.com/user/login`,data);
  }
}
