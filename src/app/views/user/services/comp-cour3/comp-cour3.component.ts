import { Component, OnInit } from '@angular/core';
import { demandes } from 'src/app/model/demandes';

@Component({
  selector: 'app-comp-cour3',
  templateUrl: './comp-cour3.component.html',
  styleUrls: ['./comp-cour3.component.css']
})
export class CompCour3Component implements OnInit {
  listdemandes! : demandes[];
  demandes! : demandes;


  constructor() { }

  ngOnInit(): void {
  }

}
