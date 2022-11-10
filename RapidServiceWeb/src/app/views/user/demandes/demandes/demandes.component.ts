import { Component, OnInit } from '@angular/core';
import { DemandeService } from 'src/app/controller/demande.service';
import { demandes } from 'src/app/model/demandes';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
  Listdemande ! : demandes[];

  constructor(private demandeservice: DemandeService) { }

  ngOnInit(): void {
    this.demandeservice.getDemandes().subscribe(
      (data:demandes[]) => this.Listdemande = data);
  }
  Supprimer(demandes:demandes):void {
    this.demandeservice.SuppDemandes(demandes.nDemande).subscribe(res=>console.log("suppression de demandes réussites"));
    
  }

}
