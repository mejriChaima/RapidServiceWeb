import { Component, OnInit } from '@angular/core';
import { Fichier } from 'src/app/model/fichier';

@Component({
  selector: 'app-monprofil',
  templateUrl: './monprofil.component.html',
  styleUrls: ['./monprofil.component.css']
})
export class MonprofilComponent implements OnInit {
  Listfichier!: Fichier [];
  constructor() { }

  ngOnInit(): void {
  }

}
