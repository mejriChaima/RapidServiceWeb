import { Component, OnInit } from '@angular/core';
import { demandes } from 'src/app/model/demandes';
import { DemandeService } from 'src/app/controller/demande.service';


@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  demandesList !: demandes []; 
  constructor(private demandeservice:DemandeService) { }

  ngOnInit(): void {
    this.demandeservice.getDemandes().subscribe(
      (data:demandes[]) => this.demandesList = data);
  }
  Supprimer(demandes:demandes):void {
    this.demandeservice.deleteDemandes(demandes.nDemande).subscribe(res=>console.log("suppression de demandes réussites"));
    
  }

  Accepter(demandes:demandes):void {
    this.demandeservice.addDemandes(demandes.nDemande).subscribe(res=>console.log(" demandes acceptée"));
    
  }

}
