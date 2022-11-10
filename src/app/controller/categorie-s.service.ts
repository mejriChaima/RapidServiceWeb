import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categorieS } from '../model/categorieS';
import { service } from '../model/service';


@Injectable({
  providedIn: 'root'
})
export class CategorieSService {
  url:string='http://localhost:3000/categorieS'
  urlS:string='http://localhost:3000/service'
  

  constructor(private http : HttpClient) { }

  getAllCategorie(){
    return this.http.get<categorieS[]>(this.url);
  }

addCategorie(c:categorieS){
    return this.http.post(this.url,c);
  }

  deleteCategorie(id:number){
    return this.http.delete(this.url+id);
    alert("Vous avez supprimer une demande");
  }
//////serv


getAllService(){
  return this.http.get<service[]>(this.urlS);
}


deleteService(service:number){
  return this.http.delete(this.urlS);
  alert("Vous avez supprimer une Service");
}

addService(s:service){
  return this.http.post(this.urlS,s);
}
}
