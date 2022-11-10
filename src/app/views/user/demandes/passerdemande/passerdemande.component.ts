import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService } from 'src/app/controller/demande.service';
import { demandes } from 'src/app/model/demandes';

@Component({
  selector: 'app-passerdemande',
  templateUrl: './passerdemande.component.html',
  styleUrls: ['./passerdemande.component.css']
})
export class PasserdemandeComponent implements OnInit {
  Listdemande ! : demandes[]; 
demandes ! : demandes;
title !: String;

  constructor(private demandeservice: DemandeService,
    private route:Router,
   private currentRoute: ActivatedRoute) { }


   id:any;
ngOnInit(): void {
let    id= this.currentRoute.snapshot.params[' id'];
console.log(  id);
if( id==null){
//add a new demande
this.demandes= new demandes();
this.title='add a new demande'}
else{
//update
this.title='update the demande with id: '+id;
this.demandeservice.getById(id).subscribe(
(data)=>this.demandes=data
)
}

}
save(){
this.demandeservice.addDemande(this.demandes).subscribe(
()=> this.Listdemande= [this.demandes, ...this.Listdemande]
);
}
}