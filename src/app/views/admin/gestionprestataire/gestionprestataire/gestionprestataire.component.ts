import { Component, OnInit } from '@angular/core';
import { PrestataireService } from 'src/app/controller/prestataire.service';
import { prestataire } from 'src/app/model/prestataire';

@Component({
  selector: 'app-gestionprestataire',
  templateUrl: './gestionprestataire.component.html',
  styleUrls: ['./gestionprestataire.component.css']
})
export class GestionprestataireComponent implements OnInit {
  Listprestataire !: prestataire[];
  constructor(private prestataireservice:PrestataireService) { }

  ngOnInit(): void {
    this.prestataireservice.getPrestataire().subscribe(
      (data:prestataire[])=>this.Listprestataire=data);
  }

}
