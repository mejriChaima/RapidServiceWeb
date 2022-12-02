import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieSService } from 'src/app/controller/categorie-s.service';
import { service } from 'src/app/model/service';

@Component({
  selector: 'app-ajouterservice',
  templateUrl: './ajouterservice.component.html',
  styleUrls: ['./ajouterservice.component.css']
})
export class AjouterserviceComponent implements OnInit {

  listcat ! : service[];
  service ! : service;

  constructor(private categorieSService : CategorieSService,
    private route:Router) { }

  id:any;
ngOnInit(): void {

}
save(){
this.categorieSService.addCategorie(this.service).subscribe(
()=> this.listcat= [this.service, ...this.listcat]
);
}
}