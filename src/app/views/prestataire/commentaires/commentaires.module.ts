import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentairesRoutingModule } from './commentaires-routing.module';
import { CommentairesComponent } from './commentaires/commentaires.component';


@NgModule({
  declarations: [
    CommentairesComponent
  ],
  imports: [
    CommonModule,
    CommentairesRoutingModule
  ]
})
export class CommentairesModule { }
