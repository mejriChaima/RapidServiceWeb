import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/model/client';

@Component({
  selector: 'app-inscriptionclient',
  templateUrl: './inscriptionclient.component.html',
  styleUrls: ['./inscriptionclient.component.css']
})
export class InscriptionclientComponent implements OnInit {
client!:client;
  constructor() { }

  ngOnInit(): void {
    this.client = new client;
  }

}
