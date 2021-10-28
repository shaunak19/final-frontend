import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { loan, User } from './modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserByEmail(email?:string){
    return this.http.get<User>(`https://final-project-chubb.herokuapp.com/user/${email}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem("access_token") || ""
        })
      });
  }

  applyLoan(data:loan){
    return this.http.post(`https://final-project-chubb.herokuapp.com/user/applyloan`,data,
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    });
  }

  getAllUserLoans(type:string){
    return this.http.get<Array<loan>>(`https://final-project-chubb.herokuapp.com/getloan/${type}`,
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    });
  }

  getAllUsers(){
    return this.http.get<Array<User>>(`https://final-project-chubb.herokuapp.com/getusers`,
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    });
  }

  updateUserByEmail(email:string,data:User){
    return this.http.put(`https://final-project-chubb.herokuapp.com/updateuser/${email}`,data,
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    });
  }
}
