import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from '../modal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customer-list-admin',
  templateUrl: './customer-list-admin.component.html',
  styleUrls: ['./customer-list-admin.component.css']
})
export class CustomerListAdminComponent implements OnInit {

  userList:Array<User> = [];
  constructor(private userService: UserService,private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.userService.getAllUsers().subscribe((data) => {
      this.userList = data;
    },(err)=>{
      console.log(err);
    })
  }

  deleteUser(email:string){
    this.adminService.deleteUserByEmail(email).subscribe(() => {
      this.loadData();
    },(err)=>{
      console.log(err);
    })
  }

}
