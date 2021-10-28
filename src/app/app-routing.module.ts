import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListAdminComponent } from './customer-list-admin/customer-list-admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserApplyLoanComponent } from './user-apply-loan/user-apply-loan.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';

const routes: Routes = [{
  path:"",
  component: LoginComponent
},
{
  path:"register",
  component: RegisterComponent
},
{
  path:"sidebar",
  component: SidebarComponent,
  children: [
    {
      path: "dashboard",
      component: DashboardComponent
    },
    {
      path: "user-overview",
      component: UserOverviewComponent
    },
    {
      path: "user-edit-profile",
      component: UserEditProfileComponent
    },
    {
      path: "user-apply-loan",
      component: UserApplyLoanComponent
    }]
},
{
  path:"sidebar-admin",
  component: SidebarAdminComponent,
  children: [
    {
      path:"dashboard-admin",
      component: DashboardAdminComponent
    },
    {
      path:"customer-list",
      component: CustomerListAdminComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
