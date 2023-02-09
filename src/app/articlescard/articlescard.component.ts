import { Component } from '@angular/core';
import { ArticlesService } from '../Services/articles.service';
@Component({
  selector: 'app-articlescard',
  templateUrl: './articlescard.component.html',
  styleUrls: ['./articlescard.component.css']
})
export class ArticlescardComponent {
  constructor (private artserv:ArticlesService){}
  articles:any
  ngOnInit():void {
    this.listarticles()
  }
    listarticles(){
      this.artserv.fectharticles().subscribe(
        (data)=>{
          this.articles=data})}
          
        }
