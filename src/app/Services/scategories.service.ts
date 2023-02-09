import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3001/api/scategories/"
  fecthscategories(){
    return this.http.get(this.url)
  }
  deletescat(id){
    return this.http.delete(this.url+"/"+id)
  }
  AddCategorie(cat)
  {
  return this.http.post(this.url,cat)
  }
  Putscategorie(cat)
{
return this.http.put(this.url + "/" + cat.id,cat)
}

}
