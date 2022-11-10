import { InscriptionclientComponent } from './inscriptionclient/inscriptionclient.component';


import { InscriptionComponent } from './inscription/inscription.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionprestataireComponent } from './inscriptionprestataire/inscriptionprestataire.component';

const routes: Routes = [
  {path:'',component:InscriptionComponent},
  {path:'inscriptionprestataire',component:InscriptionprestataireComponent},
  {path :'inscriptionclient',component:InscriptionclientComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionRoutingModule { }
