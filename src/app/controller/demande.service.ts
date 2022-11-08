import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { demandes } from '../model/demandes';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  demandeUrl:string='http://localhost:3000/demandeC'
  url:string='http://localhost:3000/demandeP'

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
 

  constructor(private http : HttpClient) { }
//C
getAllDemandes(){
    return this.http.get<demandes[]>(this.demandeUrl);
  }

addDemande(d:demandes){
    return this.http.post(this.demandeUrl,d);
  }

  deleteDemande(id:number){
    return this.http.delete(this.demandeUrl+id);
    alert("Vous avez supprimer une demande");
  }

  
  

  updateDemande(demandes : demandes){
    return this.http.put(this.demandeUrl+demandes.id,demandes)
  }
  getById(id:number){
    return this.http.get<demandes>(this.demandeUrl+id)
  }

  //p
  getAllDemande(){
    return this.http.get<demandes[]>(this.url);
  }


   }
