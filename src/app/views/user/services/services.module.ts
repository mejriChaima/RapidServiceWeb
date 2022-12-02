import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { BricolageSComponent } from './bricolage-s/bricolage-s.component';
import { DemenagementSComponent } from './demenagement-s/demenagement-s.component';
import { JardinageSComponent } from './jardinage-s/jardinage-s.component';
import { EnfantSComponent } from './enfant-s/enfant-s.component';
import { AideadomicileSComponent } from './aideadomicile-s/aideadomicile-s.component';
import { CoursPSComponent } from './cours-ps/cours-ps.component';
import { InformatiqueSComponent } from './informatique-s/informatique-s.component';
import { MenageSComponent } from './menage-s/menage-s.component';
import { ListvilleSComponent } from './listville-s/listville-s.component';
import { ListprestataireComponent } from './listprestataire/listprestataire.component';
import { ProfilPComponent } from './profil-p/profil-p.component';
import { CompCour1Component } from './comp-cour1/comp-cour1.component';
import { CompCour2Component } from './comp-cour2/comp-cour2.component';
import { CompCour3Component } from './comp-cour3/comp-cour3.component';
import { CompCour4Component } from './comp-cour4/comp-cour4.component';



@NgModule({
  declarations: [
  

       BricolageSComponent,
       DemenagementSComponent,
       JardinageSComponent,
       EnfantSComponent,
       AideadomicileSComponent,
       CoursPSComponent,
       InformatiqueSComponent,
       InformatiqueSComponent,
       MenageSComponent,
       ListvilleSComponent,
       ListprestataireComponent,
       ProfilPComponent,
       CompCour1Component,
       CompCour2Component,
       CompCour3Component,
       CompCour4Component
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    FormsModule,
  
  ]
})
export class ServicesModule { }
