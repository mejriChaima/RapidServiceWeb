import { Component, OnInit } from '@angular/core';
import { reclamation } from 'src/app/model/reclamation';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})
export class ListReclamationComponent implements OnInit {

  constructor(private router: Router) { }
  reclamation !: reclamation ;
  listReclamationcCoteUser!: reclamation[];

  ngOnInit(): void {

  }


}
