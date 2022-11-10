import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesreclamationComponent } from './mesreclamation/mesreclamation.component';
import { ReclamationComponent } from './reclamation/reclamation.component';

const routes: Routes = [
  {path:'',component:ReclamationComponent},
  {path:'mesrec',component:MesreclamationComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
