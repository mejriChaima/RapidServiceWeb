import { Component, OnInit } from '@angular/core';
import { demandes } from 'src/app/model/demandes';
import { DemandeService } from 'src/app/controller/demande.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  demandesList !: demandes []; 
  demandes !:  demandes;
  id: any;
  constructor(private demandeservice:DemandeService,
        private ac: ActivatedRoute ) { }

  ngOnInit(): void {
    
       
    this.id= this.ac.snapshot.params['id'];
    this.demandeservice.getById(this.id).subscribe(
      (d)=>{
        console.log(d);
        this.demandes=d
      }
    )
    this.demandeservice.getAllDemandes().subscribe(
      (data:demandes[]) => this.demandesList = data);
  }

  
  Supprimer(id: any){
    this.demandeservice.deleteDemande(id).subscribe(
 ()=> {console.log('removed') ;}

) }
  
  

  Accepter(demandes :demandes) {
      this.demandeservice.addDemande(this.demandes).subscribe(
      ()=> this.demandesList= [this.demandes, ...this.demandesList]
      );
      }
  
  }


