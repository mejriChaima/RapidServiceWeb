import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnexionRoutingModule } from './connexion-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';


@NgModule({
  declarations: [
    ConnexionComponent
  ],
  imports: [
    CommonModule,
    ConnexionRoutingModule,
    FormsModule
  ]
})
export class ConnexionModule { }
