import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeserviceComponent } from '../demandeservice/demandeservice/demandeservice.component';
import { DemandesComponent } from './demandes/demandes.component';

const routes: Routes = [
  {path:'',component:DemandesComponent},
  {path:'user/demandes',component:DemandesComponent},
  {path:'update/:id', component: DemandeserviceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandesRoutingModule { }
