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
    this.demandeservice.getAllDemandes().subscribe(
      (data:demandes[]) => this.demandesList = data);
  }
  Supprimer(demandes:demandes){
    let j = this.demandesList.indexOf(demandes);
    if(j!=-1){
    this.demandesList.splice(j, 1);
    this.demandeservice.deleteDemande(demandes.id).subscribe(
      ()=> this.demandesList.splice(j,1))


  }
}
  

  Accepter(demandes :demandes) {
    
  
  }

}
