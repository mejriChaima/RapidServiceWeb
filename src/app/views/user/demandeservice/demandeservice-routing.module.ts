import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeserviceComponent } from './demandeservice/demandeservice.component';

const routes: Routes = [
  {path:'',component:DemandeserviceComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeserviceRoutingModule { }
