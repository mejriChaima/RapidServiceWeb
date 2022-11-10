import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './service/services.component';
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



@NgModule({
  declarations: [
  
    ServicesComponent,
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
       ProfilPComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    FormsModule,
  
  ]
})
export class ServicesModule { }
