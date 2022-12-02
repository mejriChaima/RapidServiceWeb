import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { demandes } from '../model/demandes';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  demandeUrl:string='http://localhost:3000/demandeC'
  url:string='http://localhost:3000/demandes/fetch'
  urlgetbyid:string='http://localhost:3000/demandes/demandes/:id'
  urlpost:string='http://localhost:3000/demandes/add'
  urldelete:string='http://localhost:3000/demandes/remove/'
  urlupdate:string='http://localhost:3000/demandes/update/:id'
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
 

  constructor(private http : HttpClient) { }
//C
getAllDemandes(){
    return this.http.get<demandes[]>(this.url);
  }
  getById(id:number){
    return this.http.get<demandes>(this. urlgetbyid+id)
  }

addDemande(d:demandes){
    return this.http.post(this.urlpost,d);
  }

  deleteDemande(id:any){
    return this.http.delete(this.urldelete+id);
    alert("Vous avez supprimer une demande");
  }
 
   updateDemande(data: any, id: any){
    return this.http.put(this.urlupdate+id,data);
  }
 
  //p
  getAllDemande(){
    return this.http.get<demandes[]>(this.url);
  }


   }
