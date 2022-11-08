import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/controller/reclamation.service';
import { reclamation } from 'src/app/model/reclamation';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
  ListReclamation!: reclamation[];
  constructor(private reclamationservice:ReclamationService) { }

  ngOnInit(): void {
    this.reclamationservice.getReclamation().subscribe(
      (data:reclamation[]) => this.ListReclamation = data);
  }



  delete(reclamation:reclamation):void {
    this.reclamationservice.deleteReclamation(reclamation.nRec).subscribe(
      res=>console.log("suppression de reclamation réussites"));
    
  }

}
