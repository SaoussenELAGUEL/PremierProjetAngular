import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { ScategoriesComponent } from './scategories/scategories.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlescardComponent } from './articlescard/articlescard.component';
import { ArticlesdatatableComponent } from './articlesdatatable/articlesdatatable.component';

const routes: Routes = [
  {path:'categories', component:CategorieComponent},
  {path:'scategories', component:ScategoriesComponent},
  {path:'articles', component:ArticlesComponent},
  {path:'articlescard', component:ArticlescardComponent},
  {path:'articlesdatatable', component:ArticlesdatatableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
