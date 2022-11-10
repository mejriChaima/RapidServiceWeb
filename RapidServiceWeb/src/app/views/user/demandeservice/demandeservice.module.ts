import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeserviceRoutingModule } from './demandeservice-routing.module';
import { DemandeserviceComponent } from './demandeservice/demandeservice.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DemandeserviceComponent
  ],
  imports: [
    CommonModule,
    DemandeserviceRoutingModule,
    FormsModule
  ]
})
export class DemandeserviceModule { }
