import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent, ListCategoriesComponent } from './components';
import { ListProductsComponent, NavbarComponent } from './components';
import { DetailsProductComponent } from './components/products/details-product';

// Angular Material
import { FormsModule } from '@angular/forms'
import { MatToolbarModule } from '@angular/material/toolbar'
import { ProductsComponent } from './components/products/products.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';

// Http
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from './icons';
import { AddCategoriesComponent, AddCategoryDialog } from './components/categories/add-categories/add-categories.component';
import { DeleteCategoryComponent } from './components/categories/delete-category/delete-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ListProductsComponent,
    DetailsProductComponent,
    ListCategoriesComponent,
    CategoriesComponent,
    AddCategoriesComponent,
    AddCategoryDialog,
    DeleteCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    IconsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    TextFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
