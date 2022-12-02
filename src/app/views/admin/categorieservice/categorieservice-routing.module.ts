import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterserviceComponent } from './ajouterservice/ajouterservice.component';
import { CategorieserviceComponent } from './categorieservice/categorieservice.component';

const routes: Routes = [
  {path:'',component:CategorieserviceComponent},
  {path:'add',component:AjouterserviceComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieserviceRoutingModule { }
