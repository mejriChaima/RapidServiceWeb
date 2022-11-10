import { Component, OnInit } from '@angular/core';
import { reclamation } from 'src/app/model/reclamation';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
 reclamation :reclamation = new reclamation();
 
  constructor() { }

  ngOnInit(): void {

    this.reclamation= new reclamation();
  }

}
