import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesdemandesComponent } from './mesdemandes/mesdemandes.component';
import { PasserdemandeComponent } from './passerdemande/passerdemande.component';

const routes: Routes = [
  {path:'mesdemandes',component:MesdemandesComponent},
  {path:'passerdemande',component:PasserdemandeComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandesRoutingModule { }
