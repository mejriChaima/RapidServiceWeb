import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonprofilComponent } from './monprofil/monprofil.component';

const routes: Routes = [
  {path:'',component:MonprofilComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonprofilRoutingModule { }
