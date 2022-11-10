import { Component, OnInit } from '@angular/core';
import { CategorieSService } from 'src/app/controller/categorie-s.service';
import { categorieS } from 'src/app/model/categorieS';

@Component({
  selector: 'app-categorieservice',
  templateUrl: './categorieservice.component.html',
  styleUrls: ['./categorieservice.component.css']
})
export class CategorieserviceComponent implements OnInit {
  listcat ! : categorieS[];
  categorieS ! : categorieS;

  constructor(private categorieSService : CategorieSService) { }

  ngOnInit(): void {

    this.categorieSService.getAllCategorie().subscribe(
      (data:categorieS[]) => this.listcat = data);
  }



  delete(categorieS:categorieS):void {
    let j = this.listcat.indexOf(categorieS);
    if(j!=-1){
    this.listcat.splice(j, 1);
    
  }
  }

  save(){
    this.categorieSService.addCategorie(this.categorieS).subscribe(
    ()=> this.listcat= [this.categorieS, ...this.listcat]
    );
    }
}


