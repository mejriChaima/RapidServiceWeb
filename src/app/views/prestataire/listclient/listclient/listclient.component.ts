import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/controller/client.service';
import { client } from 'src/app/model/client';

@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.css']
})
export class ListclientComponent implements OnInit {
clientList ! : client[];
client !: client;

  constructor(private clientservice : ClientService,
    private ac: ActivatedRoute) { }

  ngOnInit(): void {
    this.clientservice.getAllClient().subscribe(
      (data:client[])=>this.clientList=data
    );

  }

  Ajouter(){
  
   this.clientservice.addClient(this.client).subscribe(
   ()=> this.clientList= [this.client, ...this.clientList]
   );
    }

}
