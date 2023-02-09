import { Component } from '@angular/core';
import { ScategoriesService } from '../Services/scategories.service';
@Component({
  selector: 'app-scategories',
  templateUrl: './scategories.component.html',
  styleUrls: ['./scategories.component.css']
})

export class ScategoriesComponent {
constructor (private scatserv:ScategoriesService){}
formHeader=""
scategories:any
id=null
categorieID=""
nomscategorie=""
imagescategorie=""
showForm=false

ngOnInit():void{ 
  this.listscategories()
  }
  listscategories(){
    this.scatserv.fecthscategories().subscribe(
    (data)=>{
    this.scategories=data
    }
    )}
    deletescategorie(id){
      this.scatserv.deletescat(id).subscribe(
        (res)=>{
          this. listscategories();
        }
      )
    }
    openForm(data){
      this.showForm=true;
      if(data){
      this.nomscategorie=data['nomscategorie'];
      this.imagescategorie=data['imagescategorie'];
      this.categorieID=data['categorieID'];
      this.id=data['_id']
      this.formHeader="Edit Sous Catégorie"
      }
      else
      {
      this.id=null
      this.formHeader="Add Sous Catégorie"
      }
      }
      
    closeForm(){
      this.showForm=false
      this.clearForm();
      }
      clearForm(){
      this.nomscategorie=""
      this.imagescategorie=""
      this.categorieID=""
      }
      savecategorie(){
        this.showForm=false;
        let scat={
      
        nomscategorie:this.nomscategorie,
        imagescategorie:this.imagescategorie,
        categorieID:this.categorieID
        }
        if(this.id){
        scat['id']=this.id
        this.scatserv.Putscategorie(scat).subscribe(
        (res)=>{
        this.listscategories();
        }
        )
        }
        else{
        this.scatserv.AddCategorie(scat).subscribe(
        (res)=>{
        this.listscategories();
        }
        )
        }
        this.clearForm();
        }
        
}



