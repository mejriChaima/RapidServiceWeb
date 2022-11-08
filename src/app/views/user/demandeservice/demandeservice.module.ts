import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeserviceRoutingModule } from './demandeservice-routing.module';
import { DemandeserviceComponent } from './demandeservice/demandeservice.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DemandeserviceComponent
  ],
  imports: [
    CommonModule,
    DemandeserviceRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class DemandeserviceModule { }
