import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnyRecord } from 'dns';
import { DemandeService } from 'src/app/controller/demande.service';
import { demandes } from 'src/app/model/demandes';
import { prestataire } from 'src/app/model/prestataire';

@Component({
  selector: 'app-mesdemandes',
  templateUrl: './mesdemandes.component.html',
  styleUrls: ['./mesdemandes.component.css']
})
export class MesdemandesComponent implements OnInit {
  @Input() Demandes !: demandes;
  @Input() nomService ! : string;
  @Output() deleteEvent= new EventEmitter<demandes>()

  public title!: string;
  Listdemande ! : demandes[];
  Listprestataire !: prestataire[];
  dataArray:any=[]

  id: any;
  demandes : any;
  messageSuccess=''
  constructor(private demandeservice: DemandeService,
              private http : HttpClient,
              private ac: ActivatedRoute) { }
          

  ngOnInit(): void {

    this.demandeservice.getAllDemandes().subscribe(data=>{
      console.log(data)
      this.dataArray=data
       })
       
    this.id= this.ac.snapshot.params['id'];
    this.demandeservice.getById(this.id).subscribe(
      (d)=>{
        console.log(d);
        this.demandes=d
      }
    )
  }

    //  delete(id:any, i:number){
    //         if(i!=-1){
    //   this.demandeservice.deleteDemande(id).subscribe(response=>{
    //     console.log(response)
    
    //      this.dataArray.splice(i,1)
      
    //     })} 
  
    // }
    
    Supprimer(id: any){
           this.demandeservice.deleteDemande(id).subscribe(
        ()=> {console.log('removed') ;}
  
    ) }
 update (f:any){
  this.demandeservice.updateDemande(f,this.ac.snapshot.params['id']).subscribe(
    ()=>{
      console.log('updated');
    } 
  )
}
 

  getdata(nomService:string,typeService:string,nomPrestataire:string,id:any){
    this.messageSuccess=''
    this.demandes.nomService=nomService
    this.demandes.typeService=typeService
    this.demandes.nomPrestataire=nomPrestataire
  
    this.demandes.id=id
    console.log(this.demandes)

  }

  // updateDemande(){
  //   this.demandeservice.updateDemande(this.demandes).subscribe(
  //     ()=> this.Listdemande= [this.demandes, ...this.Listdemande]
  //     );

  // }
//   updatenewsdemande(f:any){
//     let data=f.value
//     this.demandeservice.updateDemande(this.demandes.id,).subscribe(response=>
//       {
//       console.log(response)
//         let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.demandes.id)

//         this.dataArray[indexId].nomService=data.nomService
//         this.dataArray[indexId].typeService=data.typeService
//         this.dataArray[indexId].nomPrestataire=data.nomPrestataire


//         this.messageSuccess=`this student ${this.dataArray[indexId].nomService} is updated`

//       },(err:HttpErrorResponse)=>{
//         console.log(err.message)
      
//       })
//   }


}
