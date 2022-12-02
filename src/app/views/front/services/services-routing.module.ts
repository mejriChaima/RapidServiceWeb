import { ServicesComponent } from './services/services.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BricolageComponent } from './bricolage/bricolage.component';
import { AmenagementComponent } from './amenagement/amenagement.component';
import { AideadomicileComponent } from './aideadomicile/aideadomicile.component';
import { CoursparticulierComponent } from './coursparticulier/coursparticulier.component';
import { EnfantComponent } from './enfant/enfant.component';
import { JardinageComponent } from './jardinage/jardinage.component';
import { InformatiqueComponent } from './informatique/informatique.component';
import { MenageComponent } from './menage/menage.component';

const routes: Routes = [
  {path:'S',component:ServicesComponent},
  {path:'b',component:BricolageComponent},
  {path:'d',component:AmenagementComponent},
  {path:'ad',component:AideadomicileComponent},
  {path:'c',component:CoursparticulierComponent},
  {path:'e',component:EnfantComponent},
  {path:'j',component:JardinageComponent},
  {path:'y',component:InformatiqueComponent},
  {path:'m',component:MenageComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
