import { ClientService } from './../../../../controller/client.service';
import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/model/client';

@Component({
  selector: 'app-inscriptionclient',
  templateUrl: './inscriptionclient.component.html',
  styleUrls: ['./inscriptionclient.component.css']
})
export class InscriptionclientComponent implements OnInit {
client!:client;
Listclient!:client[];

  constructor(private ClientService:ClientService) { }

  ngOnInit(): void {
    this.ClientService.getAllClient().subscribe(
      (data:client[])=>this.Listclient=data);
  }

}
