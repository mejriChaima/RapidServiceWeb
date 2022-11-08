
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs';

import { reclamation } from '../model/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  reclamationUrl:string='http://localhost:3000/reclamation'
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private http : HttpClient) { }

  getReclamation():Observable<reclamation[]>{
    return this.http.get<reclamation[]>(this.reclamationUrl);
  }
  deleteReclamation(nRec:any): Observable<any>{
    return this.http.delete<any>(this.reclamationUrl+'/'+nRec);
    alert("Vous avez supprimer une reclamation");
  }
  geReclamationById(nRec:any):Observable<reclamation>{
      return this.http.get<reclamation>(this.reclamationUrl+'/'+nRec);
  }

}
