import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeComponent } from '../../prestataire/demande/demande/demande.component';
import { DemandesComponent } from '../demandes/demandes/demandes.component';
import { DemandeserviceComponent } from './demandeservice/demandeservice.component';

const routes: Routes = [
  {path:'',component:DemandeserviceComponent},
  {path:'update/:id', component: DemandeserviceComponent }

  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeserviceRoutingModule { }
