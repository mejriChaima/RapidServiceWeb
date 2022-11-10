import { Component, OnInit } from '@angular/core';
import { PrestataireService } from 'src/app/controller/prestataire.service';
import { prestataire } from 'src/app/model/prestataire';

@Component({
  selector: 'app-listprestataire',
  templateUrl: './listprestataire.component.html',
  styleUrls: ['./listprestataire.component.css']
})
export class ListprestataireComponent implements OnInit {
  prestataire ! : prestataire;
  Listprestataire !: prestataire[];
  constructor( private prestataireservice : PrestataireService) { }

  ngOnInit(): void {
    this.prestataireservice.getPrestataire().subscribe(
      (data:prestataire[])=>this.Listprestataire=data
    );

  }

  Ajouter(){
  
   this.prestataireservice.addPrestataire(this.prestataire).subscribe(
   ()=> this.Listprestataire= [this.prestataire, ...this.Listprestataire]
   );
    }

}
