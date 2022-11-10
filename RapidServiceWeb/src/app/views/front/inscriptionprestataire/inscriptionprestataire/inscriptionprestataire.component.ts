import { Component, OnInit } from '@angular/core';
import { prestataire } from 'src/app/model/prestataire';

@Component({
  selector: 'app-inscriptionprestataire',
  templateUrl: './inscriptionprestataire.component.html',
  styleUrls: ['./inscriptionprestataire.component.css']
})
export class InscriptionprestataireComponent implements OnInit {
prestataire!:prestataire;
  constructor() { }

  ngOnInit(): void {
    this.prestataire=new prestataire;
  }

}
