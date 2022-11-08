import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatistiqueComponent } from './statistique/statistique.component';

const routes: Routes = [
  {path:'',component:StatistiqueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatistiqueRoutingModule { }
