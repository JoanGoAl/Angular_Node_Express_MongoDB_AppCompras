import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent, ListProductsComponent } from './components';


const routes: Routes = [
  {
    path: '', component: ListProductsComponent
  },
  {
    path: 'categories', component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
