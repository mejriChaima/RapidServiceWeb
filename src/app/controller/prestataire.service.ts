import { url } from 'inspector';
import { prestataire } from './../model/prestataire';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrestataireService {
  url:string='http://loclahost:3000/prestataire'
  constructor(private http : HttpClient) { }
  getPrestataire(){
    return this.http.get<prestataire[]>(this.url);
  }
  addPrestataire(p:prestataire){
    return this.http.post(this.url,p);
  }

  deletePrestataire(id:number){
    return this.http.delete(this.url+id);
    console.log("Vous avez supprimer une prestataire");
  }
}
