import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyprofilRoutingModule } from './myprofil-routing.module';
import { MyprofilComponent } from './myprofil/myprofil.component';


@NgModule({
  declarations: [
    MyprofilComponent
  ],
  imports: [
    CommonModule,
    MyprofilRoutingModule
  ]
})
export class MyprofilModule { }
