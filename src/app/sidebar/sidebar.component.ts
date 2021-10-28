import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentRoute:string = "";
  status: boolean = false;
  constructor(private router:Router) {
    this.findCurrentRoute();
   }

  ngOnInit(): void {
    this.findCurrentRoute();
  }
  
  findCurrentRoute(){
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
        .subscribe((e:any) => {      
            this.currentRoute = e.url;
            console.log(this.currentRoute);
         });
   }

  clickEvent(){
      this.status = !this.status;       
  }
  logout(){
    localStorage.removeItem("access_token");
    this.router.navigate(['']);
  }
}
