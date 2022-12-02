import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AideadomicileSComponent } from './aideadomicile-s/aideadomicile-s.component';
import { BricolageSComponent } from './bricolage-s/bricolage-s.component';
import { CompCour1Component } from './comp-cour1/comp-cour1.component';
import { CompCour2Component } from './comp-cour2/comp-cour2.component';
import { CompCour3Component } from './comp-cour3/comp-cour3.component';
import { CompCour4Component } from './comp-cour4/comp-cour4.component';
import { CoursPSComponent } from './cours-ps/cours-ps.component';
import { DemenagementSComponent } from './demenagement-s/demenagement-s.component';
import { EnfantSComponent } from './enfant-s/enfant-s.component';
import { InformatiqueSComponent } from './informatique-s/informatique-s.component';
import { JardinageSComponent } from './jardinage-s/jardinage-s.component';
import { ListprestataireComponent } from './listprestataire/listprestataire.component';
import { ListvilleSComponent } from './listville-s/listville-s.component';
import { MenageSComponent } from './menage-s/menage-s.component';
import { ProfilPComponent } from './profil-p/profil-p.component';

const routes: Routes = [
  {path:'bs',component:BricolageSComponent},
  {path:'ads',component:AideadomicileSComponent},
  {path:'cs',component:CoursPSComponent},
  {path:'ds',component:DemenagementSComponent},
  {path:'es',component:EnfantSComponent},
  {path:'ys',component:InformatiqueSComponent},
  {path:'js',component:JardinageSComponent},
  {path:'ms',component:MenageSComponent},
  {path:'ls',component:ListvilleSComponent},
  {path:'pp',component:ListprestataireComponent},
  {path:'pr',component:ProfilPComponent},
  {path:'cour1',component:CompCour1Component},
  {path:'cour2',component:CompCour2Component},
  {path:'cour3',component:CompCour3Component},
  {path:'cour4',component:CompCour4Component},



 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
