import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthAdminComponent } from './auth-admin/auth-admin.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserLayoutComponent,
    FrontLayoutComponent,
    AuthAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LayoutsModule { }
