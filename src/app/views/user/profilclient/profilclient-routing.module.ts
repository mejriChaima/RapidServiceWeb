import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilclientComponent } from './profilclient/profilclient.component';

const routes: Routes = [
  {path:'',component:ProfilclientComponent},
  {path:'/profilclient',component:ProfilclientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilclientRoutingModule { }
