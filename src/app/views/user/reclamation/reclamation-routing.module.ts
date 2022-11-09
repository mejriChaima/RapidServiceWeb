import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { ReclamationComponent } from './reclamation/reclamation.component';

const routes: Routes = [
  {path:'listreclamation',component:ListReclamationComponent},
  {path:'',component:ReclamationComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
