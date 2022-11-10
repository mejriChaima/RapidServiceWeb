import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { demandes } from '../model/demandes';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  demandeUrl:string='http://localhost:3000/demandeP'
  url:string='http://localhost:3000/demandeC'
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }

  constructor(private http : HttpClient) { }
//Prestataire
  getDemandes():Observable<demandes[]>{
    return this.http.get<demandes[]>(this.demandeUrl);
  }

  deleteDemandes(nDemande:any): Observable<any>{
    return this.http.delete<any>(this.demandeUrl+'/'+nDemande);
    alert("Vous avez supprimer une demande");
  }

  addDemandes(nDemande:any): Observable<any>{
    return this.http.post<any>(this.demandeUrl,nDemande);
  }

  //client
  getDemande():Observable<demandes[]>{
    return this.http.get<demandes[]>(this.url);
  }

  SuppDemandes(nDemande:any): Observable<any>{
    return this.http.delete<any>(this.url+'/'+nDemande);
    alert("Vous avez supprimer une demande");
  }
  
  }
