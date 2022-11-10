import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieserviceComponent } from './categorieservice/categorieservice.component';

const routes: Routes = [
  {path:'',component:CategorieserviceComponent}  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieserviceRoutingModule { }
