import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { InscriptionclientComponent } from './inscriptionclient/inscriptionclient.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InscriptionclientComponent
  ],
  imports: [
    CommonModule,
  FormsModule
  ]
})
export class InscriptionclientModule { }
