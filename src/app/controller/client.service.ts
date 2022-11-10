import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url:string='http://localhost:3000/client'

  constructor(private http : HttpClient) { }


  getAllClient(){
    return this.http.get<client[]>(this.url);
  }


  addClient(c:client){
    return this.http.post(this.url,c);
  }

  deleteClient(id:number){
    return this.http.delete(this.url+id);
    alert("Vous avez supprimer une client");
  }

  //

}
