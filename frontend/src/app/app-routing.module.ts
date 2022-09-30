import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent, ProductsComponent } from './components';

const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: 'products', component: ProductsComponent
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
