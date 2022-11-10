import { Component, OnInit } from '@angular/core';
import { AvisService } from 'src/app/controller/avis.service';
import { Avis } from 'src/app/model/avis';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  Listavis !: Avis[];


  constructor(private avisservice: AvisService) { }

  ngOnInit(): void {
    this.avisservice.getAllAvis().subscribe(
      (data:Avis[]) => this.Listavis = data);
  }
  Supprimer(avis:Avis){
    let j = this.Listavis.indexOf(avis);
    if(j!=-1){
    this.Listavis.splice(j, 1);
    //this.Listavis.deleteAvis(avis.id).subscribe(
      //()=> this.Listavis.splice(j,1))

  }
  }
  
}

