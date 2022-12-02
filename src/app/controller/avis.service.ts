import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avis } from '../model/avis';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  url:string='http://localhost:3000/avis/fetch'
  getbyurl:string='http://localhost:3000/avis/Avis/'
  addurl:string='http://localhost:3000/avis/add'
  deleteurl:string='http://localhost:3000/avis/remove/'
  

  constructor( private http : HttpClient) { }


  getAllAvis(){
    return this.http.get<Avis[]>(this.url);
  }

 
  addAvis(a:Avis){
    return this.http.post(this.addurl,a);
  }

  deleteAvis(id:number){
    return this.http.delete(this.deleteurl+id);
    alert("Vous avez supprimer une avis");
  }

  getById(id:number){
    return this.http.get<Avis>(this.getbyurl+id)
  }
  
  }
