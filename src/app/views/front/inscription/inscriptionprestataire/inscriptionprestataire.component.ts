import { ListclientModule } from './../../../prestataire/listclient/listclient.module';
import { PrestataireService } from './../../../../controller/prestataire.service';

import { Component, OnInit } from '@angular/core';
import { prestataire } from 'src/app/model/prestataire';
@Component({
  selector: 'app-inscriptionprestataire',
  templateUrl: './inscriptionprestataire.component.html',
  styleUrls: ['./inscriptionprestataire.component.css']
})
export class InscriptionprestataireComponent implements OnInit {
prestataire!:prestataire;
Listprestataire !: prestataire[];
  constructor(private prestataireservice : PrestataireService) { }

  ngOnInit(): void {
    this.prestataireservice.getPrestataire().subscribe(
      (data:prestataire[])=>this.Listprestataire=data
    );
    
  }

}
