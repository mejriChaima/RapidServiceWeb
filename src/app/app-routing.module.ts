import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { LayoutsModule } from './layouts/layouts.module';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:"",component:FrontLayoutComponent},

  {path:'admin',component:AdminLayoutComponent,
   children:[
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashbord/dashbord.module').then(m=>m.DashbordModule)},
    {path:'reclamation',loadChildren:()=>import('./views/admin/reclamation/reclamation.module').then(m=>m.ReclamationModule)}
   ]},
  {path:"user",component:UserLayoutComponent}
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  LayoutsModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
