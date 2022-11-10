import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilclientRoutingModule } from './profilclient-routing.module';
import { ProfilclientComponent } from './profilclient/profilclient.component';


@NgModule({
  declarations: [
    ProfilclientComponent
  ],
  imports: [
    CommonModule,
    ProfilclientRoutingModule
  ]
})
export class ProfilclientModule { }
