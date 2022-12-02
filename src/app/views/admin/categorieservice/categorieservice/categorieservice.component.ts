import { Component, OnInit } from '@angular/core';
import { CategorieSService } from 'src/app/controller/categorie-s.service';
import { service } from 'src/app/model/service';

@Component({
  selector: 'app-categorieservice',
  templateUrl: './categorieservice.component.html',
  styleUrls: ['./categorieservice.component.css']
})
export class CategorieserviceComponent implements OnInit {
  listcat ! : service[];
  service ! : service;

  constructor(private categorieSService : CategorieSService) { }

  ngOnInit(): void {

    this.categorieSService.getAllCategorie().subscribe(
      (data:service[]) => this.listcat = data);
  }



  delete(service:service):void {
    let j = this.listcat.indexOf(service);
    if(j!=-1){
    this.listcat.splice(j, 1);
    
  }
  }

  save(){
    this.categorieSService.addCategorie(this.service).subscribe(
    ()=> this.listcat= [this.service, ...this.listcat]
    );
    }
}


