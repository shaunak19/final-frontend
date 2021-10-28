import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { UserApplyLoanComponent } from './user-apply-loan/user-apply-loan.component';
import { UserEditProfileComponent } from './user-edit-profile/user-edit-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { CustomerListAdminComponent } from './customer-list-admin/customer-list-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    SidebarAdminComponent,
    UserOverviewComponent,
    UserApplyLoanComponent,
    UserEditProfileComponent,
    DashboardComponent,
    DashboardAdminComponent,
    CustomerListAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
