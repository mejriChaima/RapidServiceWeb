import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvisService } from 'src/app/controller/avis.service';
import { Avis } from 'src/app/model/avis';

@Component({
  selector: 'app-profil-p',
  templateUrl: './profil-p.component.html',
  styleUrls: ['./profil-p.component.css']
})
export class ProfilPComponent implements OnInit {
  listavis ! : Avis[];
  avis ! : Avis;

  constructor( private avisservice : AvisService,
               private currentRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    this.avisservice.getAllAvis().subscribe(
      (data:Avis[])=>{this.listavis=data}
   );
 }
 increment(avis: Avis){
  let i= this.listavis.indexOf(avis);
  if(i!=-1){
   this.listavis[i].nbrAvis++;
  }
 }

 ajouter(){
  this.avisservice.addAvis(this.avis).subscribe(
  ()=> this.listavis= [this.avis, ...this.listavis]
  );
  }
      Supprimer(id: any){
        this.avisservice.deleteAvis(id).subscribe(
     ()=> {console.log('removed') ;}
    
    ) }
       }
