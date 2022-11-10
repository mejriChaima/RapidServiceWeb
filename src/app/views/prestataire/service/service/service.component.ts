import { Component, OnInit } from '@angular/core';
import { CategorieSService } from 'src/app/controller/categorie-s.service';
import { service } from 'src/app/model/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  listservice ! : service[];
  service ! : service;

  constructor(private categorieservice :CategorieSService ) { }

  ngOnInit(): void {
    this.service = new service();

    this.categorieservice.getAllService().subscribe(
      (data:service[])=>this.listservice=data
   );
  

}
Supprimer(service:service){
}
  save(){
    this.categorieservice.addService(this.service).subscribe(
    ()=> this.listservice= [this.service, ...this.listservice]
    );
    }

}

