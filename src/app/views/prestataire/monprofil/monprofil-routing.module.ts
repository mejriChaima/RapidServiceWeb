import { MonprofilComponent } from './monprofil/monprofil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:MonprofilComponent},
  {path:'/monprofil',component:MonprofilComponent}
  
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonprofilRoutingModule { }