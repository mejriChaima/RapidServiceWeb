import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DemandeService } from 'src/app/controller/demande.service';
import { demandes } from 'src/app/model/demandes';
import { prestataire } from 'src/app/model/prestataire';

@Component({
  selector: 'app-mesdemandes',
  templateUrl: './mesdemandes.component.html',
  styleUrls: ['./mesdemandes.component.css']
})
export class MesdemandesComponent implements OnInit {
  @Input() Demandes !: demandes;
  @Input() nomService ! : string;
  @Output() deleteEvent= new EventEmitter<demandes>()

  public title!: string;
  Listdemande ! : demandes[];
  Listprestataire !: prestataire[];

  demandes ! : demandes;

  constructor(private demandeservice: DemandeService) { }

  ngOnInit(): void {

    this.title = '';
    this.demandes = new demandes();

    this.demandeservice.getAllDemandes().subscribe(
      (data:demandes[])=>this.Listdemande=data
   );

     }

  Supprimer(demandes:demandes){
    let i = this.Listdemande.indexOf(demandes);
    if(i!=-1){
    this.Listdemande.splice(i, 1);
    this.demandeservice.deleteDemande(demandes.id).subscribe(
      ()=> this.Listdemande.splice(i,1))
      //// let i= this.Listdemande.indexOf(demandes);
    //if(i!=-1){
      //cnx to backend service/api
      //this.demandeservice.deleteDemande(demandes.id).subscribe(
     //// ()=> this.Listdemande.splice(i,1)
    // )

    }
  
  }

  updateDemande(){
    this.demandeservice.updateDemande(this.demandes).subscribe(
      ()=> this.Listdemande= [this.demandes, ...this.Listdemande]
      );

  }


}
