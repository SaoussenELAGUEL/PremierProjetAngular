import { Component } from '@angular/core';
import { ArticlesService } from '../Services/articles.service';
import { compileDeclarePipeFromMetadata } from '@angular/compiler';
import { ScategoriesService } from '../Services/scategories.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  constructor(private artserv:ArticlesService, private scatserve:ScategoriesService){}
  articles:any;
  scategories:any;
  term:string;
  formHeader=""
  id=null
  designation=""
  imageart=""
  prix=null
  reference=""
  marque=""
  qtestock=null
  scategorieID=""

  showForm=false
  ngOnInit():void{ 
  this.listarticles();
  this.loadSCategorie();
  }
  listarticles(){
    this.artserv.fectharticles().subscribe(
    (data)=>{
    this.articles=data
    }
    )}
    loadSCategorie(){
      return this.scatserve.fecthscategories().subscribe(
        data=>{
          this.scategories=data;}),
          (err:any)=>console.log(err)
        }
    deleteArticles(id){
      this.artserv.deletearticle(id).subscribe(
        (res)=>{
          this.listarticles();
        }
      )
    }
    openForm(data){
      this.showForm=true;
      if(data){
      this.designation=data['designation'];
      this.imageart=data['imageart'];
      this.prix=data['prix'];
      this.qtestock=data['qtestock'];
      this.scategorieID=data['scategorieID'];
      this.reference=data['reference'];
      this.marque=data['marque'];
      this.id=data['_id'];
     
      this.formHeader="Edit Article"
      }
      else
      {
      this.id=null
      this.formHeader="Add Article"
      }




    }
    clearForm(){
      this.designation=""
      this.imageart=""
      this.id=null
      this.reference=""
      this.marque=""
      this.qtestock=null
      this.prix=null
      this.scategorieID=""
    

    }
    closeForm(){
      this.showForm=false
      this.clearForm();
    }
    saveArticle(){
      this.showForm=false
    let art={
      id:this.id,
    designation:this.designation,
    imageart:this.imageart,
    prix:this.prix,
    scategorieID:this.scategorieID,
    qtestock:this.qtestock,
    reference:this.reference,
    marque:this.marque
    }
    if(this.id){
      art['_id']=this.id
      this.artserv.putArticle(art).subscribe(
      (res)=>{
      this.listarticles();
      }
      )
      }
      else{
      this.artserv.addArticle(art).subscribe(
      (res)=>{
      this.listarticles();
      }
      )
      }
      this.clearForm();}
        










    
    editArticle(data){
      this.showForm=true;
      this.id=data['_id'];
    this.designation=data['designation'],
    this.imageart=data['imageart'];
    this.scategorieID=data['scategorieID']
    this.prix=data['prixachat'],
    this.qtestock=data['qtestock']
    this.reference=data['reference'];
    this.marque=data['marque'];
    }

  
  }

