import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/controller/client.service';
import { client } from 'src/app/model/client';


@Component({
  selector: 'app-gestionclients',
  templateUrl: './gestionclients.component.html',
  styleUrls: ['./gestionclients.component.css']
})
export class GestionclientsComponent implements OnInit {
  Listclient !:client[];

  constructor(private clientservice:ClientService) { }

  ngOnInit(): void {
    this.clientservice.getAllClient().subscribe(
      (data:client[])=>this.Listclient=data);
  }


 


}
