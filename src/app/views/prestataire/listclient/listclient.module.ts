import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListclientRoutingModule } from './listclient-routing.module';
import { ListclientComponent } from './listclient/listclient.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListclientComponent
  ],
  imports: [
    CommonModule,
    ListclientRoutingModule,
    FormsModule
  ]
  
})
export class ListclientModule { }
