import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService } from 'src/app/controller/demande.service';
import { demandes } from 'src/app/model/demandes';
import { client } from 'src/app/model/client';

@Component({
  selector: 'app-demandeservice',
  templateUrl: './demandeservice.component.html',
  styleUrls: ['./demandeservice.component.css']
})
export class DemandeserviceComponent implements OnInit {
 
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
   //if(this.demandes.id==null){
   //this.demandes.id=0;
   // this.demandeservice.addDemande(this.demandes).subscribe(
     // ()=>this.route.navigate(['user/demandes'])
   // )
  // }else{
  // this.demandeservice.updateDemande(this.demandes).subscribe(
   //   ()=>this.route.navigate(['user/demandes'])
  // )
 




  this.demandeservice.addDemande(this.demandes).subscribe(
  ()=> this.Listdemande= [this.demandes, ...this.Listdemande]
  );
   }
}


