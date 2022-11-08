import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services/services.component';
import { BricolageComponent } from './bricolage/bricolage.component';
import { JardinageComponent } from './jardinage/jardinage.component';
import { AmenagementComponent } from './amenagement/amenagement.component';
import { MenageComponent } from './menage/menage.component';
import { EnfantComponent } from './enfant/enfant.component';
import { InformatiqueComponent } from './informatique/informatique.component';
import { AideadomicileComponent } from './aideadomicile/aideadomicile.component';
import { CoursparticulierComponent } from './coursparticulier/coursparticulier.component';


@NgModule({
  declarations: [
    ServicesComponent,
    BricolageComponent,
    JardinageComponent,
    AmenagementComponent,
    MenageComponent,
    EnfantComponent,
    InformatiqueComponent,
    AideadomicileComponent,
    CoursparticulierComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    FormsModule
  ]
})
export class ServicesModule { }
