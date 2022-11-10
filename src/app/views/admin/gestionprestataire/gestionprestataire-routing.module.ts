import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionprestataireComponent } from './gestionprestataire/gestionprestataire.component';

const routes: Routes = [
  {path:'',component:GestionprestataireComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionprestataireRoutingModule { }
