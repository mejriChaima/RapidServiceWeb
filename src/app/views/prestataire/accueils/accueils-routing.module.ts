import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilsComponent } from './accueils/accueils.component';

const routes: Routes = [
  {path:'',component:AccueilsComponent}  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilsRoutingModule { }
