import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loan } from './modal';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  deleteLoanAppByEmail(email?:string){
    return this.http.delete(`https://final-project-chubb.herokuapp.com/delLoanApp/${email}`,
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    });
  }

  deleteUserByEmail(email?:string){
    return this.http.delete(`https://final-project-chubb.herokuapp.com/delUser/${email}`,
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem("access_token") || ""
      })
    })
  }

}
