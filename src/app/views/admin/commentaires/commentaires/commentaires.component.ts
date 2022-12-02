import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/model/commentaire';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {
  ListCommentaire!: Commentaire[];
  constructor() { }

  ngOnInit(): void {
  }

}
