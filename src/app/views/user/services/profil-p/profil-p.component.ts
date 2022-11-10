import { Component, OnInit } from '@angular/core';
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

  constructor( private avisservice : AvisService ) { }

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


    save(){
      this.avisservice.addAvis(this.avis).subscribe(
      ()=> this.listavis= [this.avis, ...this.listavis]
      );
      }
   
       deleteProduct(avis:Avis){
        let i= this.listavis.indexOf(avis);
        if(i!=-1){
          //cnx to backend service/api
          this.avisservice.deleteAvis(avis.id).subscribe(
            ()=> this.listavis.splice(i,1)
          )
    
        }
      }

}
