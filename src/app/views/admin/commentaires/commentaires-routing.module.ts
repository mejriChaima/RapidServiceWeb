import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentairesComponent } from './commentaires/commentaires.component';

const routes: Routes = [
  {path:'',component:CommentairesComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentairesRoutingModule { }
