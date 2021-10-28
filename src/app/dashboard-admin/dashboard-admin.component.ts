import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loan } from '../modal';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  
  userList:Array<loan> = [];
  constructor(private router: Router,private userService: UserService,private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.userService.getAllUserLoans("admin").subscribe((data) => {
      //console.log("in LoadData");
      this.userList = data;
    },(err)=>{
      console.log(err);
    })
  }
  redirect(){
    this.router.navigate(['sidebar/user-apply-loan']);
  }

  deleteUserLoanApp(email:string){
    this.adminService.deleteLoanAppByEmail(email).subscribe(() => {
      this.loadData();
    },(err)=>{
      console.log(err);
    })
  }
}
