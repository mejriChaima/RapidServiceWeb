import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieserviceRoutingModule } from './categorieservice-routing.module';
import { CategorieserviceComponent } from './categorieservice/categorieservice.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategorieserviceComponent
  ],
  imports: [
    CommonModule,
    CategorieserviceRoutingModule,
    FormsModule
  ]
})
export class CategorieserviceModule { }
