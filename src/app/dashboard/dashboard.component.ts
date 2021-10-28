import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loan } from '../modal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usernm:string="";
  userList:Array<loan> = [];
  constructor(private router: Router,private userService:UserService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    //console.log("outside LoadData");
    this.userService.getAllUserLoans("user").subscribe((data) => {
      console.log("in LoadData");
      this.userList = data;
      this.usernm = data[0].userName;
    },(err)=>{
      console.log(err);
    })
  }
  redirect(){
    this.router.navigate(['sidebar/user-apply-loan']);
  }
}
