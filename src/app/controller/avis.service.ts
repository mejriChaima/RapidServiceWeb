import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avis } from '../model/avis';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  url:string='http://localhost:3000/avis'

  constructor( private http : HttpClient) { }


  getAllAvis(){
    return this.http.get<Avis[]>(this.url);
  }


  addAvis(a:Avis){
    return this.http.post(this.url,a);
  }

  deleteAvis(id:number){
    return this.http.delete(this.url+id);
    alert("Vous avez supprimer une avis");
  }

  getById(id:number){
    return this.http.get<Avis>(this.url+id)
  }
}
