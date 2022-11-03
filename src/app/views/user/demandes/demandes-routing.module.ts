import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandesComponent } from './demandes/demandes.component';

const routes: Routes = [
  {path:'',component:DemandesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandesRoutingModule { }
