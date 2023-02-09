import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { identifierName } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
     //url du backend!
  url="http://localhost:3001/api/articles/"
  constructor(private http:HttpClient) {}
  fectharticles() {
    return this.http.get(this.url)
  }
  deletearticle(id){
    return this.http.delete(this.url+id);
  }
  addArticle(art){
   return this.http.post(this.url,art)
  }
  
  putArticle(art){
    return this.http.put(this.url+ "/"+ art.id,art)
  }
}
