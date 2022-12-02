import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ReclamationService } from 'src/app/controller/reclamation.service';
import { reclamation } from 'src/app/model/reclamation';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css'],
})
export class ReclamationComponent implements OnInit {
  reclamation !: reclamation ;
  listReclamation!: reclamation[];
  //status !:["En cours", "traites"];

  constructor(private reclamationservice: ReclamationService ,private router:Router) {}

  ngOnInit(): void {
    this.reclamation = new reclamation();
    this.listReclamation = [];
  }

  saveReclamation() {
    this.reclamation.nRec = 1;
    this.reclamation.status = 'En cours de traitement';
    this.listReclamation.push(this.reclamation);
    console.log('visualiser la liste');
    console.log(this.listReclamation);
  }

  onSubmit() {
    this.reclamation.nRec = 1;
    this.reclamation.status = 'En cours de traitement';
    //console.log(this.reclamation);
   this.reclamationservice.postReclamation(this.reclamation).subscribe(
    ()=>this.listReclamation=[this.reclamation, ...this.listReclamation]
   );
    //(this.product).subscribe((data)=>this.router.navigateByUrl('/home'));
  }

  gotoListReclamation(){
   
  }
 
}

