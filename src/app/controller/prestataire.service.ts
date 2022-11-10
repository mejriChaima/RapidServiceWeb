import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { prestataire } from '../model/prestataire';

@Injectable({
  providedIn: 'root'
})
export class PrestataireService {
  url:string='http://localhost:3000/prestataire'

  constructor(private http : HttpClient) { }

  getPrestataire(){
    return this.http.get<prestataire[]>(this.url);
  }


  addPrestataire(p:prestataire){
    return this.http.post(this.url,p);
  }

  deletePrestataire(id:number){
    return this.http.delete(this.url+id);
    alert("Vous avez supprimer une prestataire");
  }

  getById(id:number){
    return this.http.get<prestataire>(this.url+id)
  }
}
