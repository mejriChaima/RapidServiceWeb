import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListclientComponent } from './listclient/listclient.component';

const routes: Routes = [
  {path:'',component:ListclientComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListclientRoutingModule { }
